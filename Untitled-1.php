function custom_contact_settings_menu() {
    add_menu_page(
        'Contact Settings',
        'Contact Settings',
        'manage_options',
        'custom-contact-settings',
        'custom_contact_settings_page',
        'dashicons-admin-generic',
        80
    );
}
add_action('admin_menu', 'custom_contact_settings_menu');

// Register settings
function custom_contact_settings_init() {
    register_setting('custom_contact_settings_group', 'custom_contact_settings', [
        'sanitize_callback' => 'custom_contact_settings_sanitize',
        'default' => [
            'locations' => [],
            'default_location' => ''
        ]
    ]);
}
add_action('admin_init', 'custom_contact_settings_init');

// Sanitize input data
function custom_contact_settings_sanitize($input) {
    $sanitized = [];
    
    // Sanitize locations
    $sanitized['locations'] = [];
    if (isset($input['locations']) && is_array($input['locations'])) {
        foreach ($input['locations'] as $location) {
            $name = isset($location['name']) ? trim($location['name']) : '';
            if (!empty($name)) {
                $sanitized['locations'][] = [
                    'name' => sanitize_text_field($name),
                    'email' => isset($location['email']) ? sanitize_email($location['email']) : '',
                    'phone' => isset($location['phone']) ? sanitize_text_field($location['phone']) : ''
                ];
            }
        }
    }
    
    // Sanitize default location
    $location_names = array_column($sanitized['locations'], 'name');
    $sanitized['default_location'] = isset($input['default_location']) && in_array($input['default_location'], $location_names)
        ? sanitize_text_field($input['default_location'])
        : (!empty($location_names) ? $location_names[0] : '');
    
    return $sanitized;
}

// Render the settings page
function custom_contact_settings_page() {
    $options = get_option('custom_contact_settings', [
        'locations' => [],
        'default_location' => ''
    ]);
    ?>
    <div class="wrap">
        <h1>Contact Settings</h1>
        <form method="post" action="options.php">
            <?php
            settings_fields('custom_contact_settings_group');
            do_settings_sections('custom_contact_settings_group');
            ?>
            <table class="form-table">
				
                <!-- Locations -->
                <tr>
                    <th scope="row"><label>Locations</label></th>
                    <td>
                        <div id="locations-container">
                            <?php
                            if (!empty($options['locations'])) {
                                foreach ($options['locations'] as $index => $location) {
                                    ?>
                                    <div class="location-field" style="margin-bottom: 20px; padding: 10px; border: 1px solid #ddd;">
                                        <p>
                                            <label><strong>Location Name</strong></label><br>
                                            <input type="text" name="custom_contact_settings[locations][<?php echo $index; ?>][name]" value="<?php echo esc_attr($location['name']); ?>" class="regular-text" required />
                                        </p>
                                        <p>
                                            <label><strong>Email</strong></label><br>
                                            <input type="email" name="custom_contact_settings[locations][<?php echo $index; ?>][email]" value="<?php echo esc_attr($location['email']); ?>" class="regular-text" />
                                        </p>
                                        <p>
                                            <label><strong>Phone Number</strong></label><br>
                                            <input type="text" name="custom_contact_settings[locations][<?php echo $index; ?>][phone]" value="<?php echo esc_attr($location['phone']); ?>" class="regular-text" />
                                        </p>
                                        <button type="button" class="button remove-location">Remove Location</button>
                                    </div>
                                    <?php
                                }
                            }
                            ?>
							
                        </div>
						<button type="button" id="add-location" class="button">Add Location</button>
                        
                    </td>
                </tr>
                
                <!-- Default Location -->
                <tr>
                    <th scope="row"><label for="default_location">Default Location</label></th>
                    <td>
                        <select name="custom_contact_settings[default_location]" id="default_location">
                            <option value="">Select Default Location</option>
                            <?php
                            foreach ($options['locations'] as $location) {
                                $selected = ($location['name'] === $options['default_location']) ? 'selected' : '';
                                echo '<option value="' . esc_attr($location['name']) . '" ' . $selected . '>' . esc_html($location['name']) . '</option>';
                            }
                            ?>
                        </select>
                    </td>
                </tr>
				
            </table>
            <?php submit_button(); ?>
        </form>
    </div>

    <script>
        jQuery(document).ready(function($) {
            let locationIndex = <?php echo count($options['locations']); ?>;
            
            // Add new location field
            $('#add-location').on('click', function() {
                const newField = '<div class="location-field" style="margin-bottom: 20px; padding: 10px; border: 1px solid #ddd;">' +
                    '<p>' +
                    '<label><strong>Location Name</strong></label><br>' +
                    '<input type="text" name="custom_contact_settings[locations][' + locationIndex + '][name]" class="regular-text" required />' +
                    '</p>' +
                    '<p>' +
                    '<label><strong>Email</strong></label><br>' +
                    '<input type="email" name="custom_contact_settings[locations][' + locationIndex + '][email]" class="regular-text" />' +
                    '</p>' +
                    '<p>' +
                    '<label><strong>Phone Number</strong></label><br>' +
                    '<input type="text" name="custom_contact_settings[locations][' + locationIndex + '][phone]" class="regular-text" />' +
                    '</p>' +
                    '<button type="button" class="button remove-location">Remove Location</button>' +
                    '</div>';
                $('#locations-container').append(newField);
                locationIndex++;
                updateDefaultLocationDropdown();
            });

            // Remove location field
            $(document).on('click', '.remove-location', function() {
                $(this).parent('.location-field').remove();
                updateDefaultLocationDropdown();
            });

            // Update default location dropdown
            function updateDefaultLocationDropdown() {
                const locations = [];
                $('#locations-container input[name$="[name]"]').each(function() {
                    const val = $(this).val().trim();
                    if (val) {
                        locations.push(val);
                    }
                });

                const $dropdown = $('#default_location');
                const currentValue = $dropdown.val();
                $dropdown.empty().append('<option value="">Select Default Location</option>');

                locations.forEach(function(location) {
                    const selected = (location === currentValue) ? 'selected' : '';
                    $dropdown.append('<option value="' + location + '" ' + selected + '>' + location + '</option>');
                });
            }

            // Update dropdown when location names change
            $('#locations-container').on('input', 'input[name$="[name]"]', updateDefaultLocationDropdown);
        });
    </script>

    <style>
        .location-field {
            background: #f9f9f9;
        }
        .location-field p {
            margin: 0 0 10px 0;
        }
        .location-field .button {
            margin-top: 5px;
        }
		#locations-container{
			display: flex;
			flex-wrap: wrap;
				gap: 30px;
		}
		#locations-container #add-location{
			width: 30%;
    padding: 8px 10px;
		}
		#locations-container button, #add-location{
			background-color: #006C79;
			color: #fff;
		}
    </style>
    <?php
}