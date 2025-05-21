#JavaScript Practice 2024
Html
The title attribute defines some extra information about an element.
The value of the title attribute will be displayed as a tooltip when you mouse over the element:
as

<p title="this will be displayed when the mouse is on the paragraph">Hello</p>

<a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a>
The target attribute can have one of the following values:
\_self - Default. Opens the document in the same window/tab as it was clicked
\_blank - Opens the document in a new window or tab
\_parent - Opens the document in the parent frame
\_top - Opens the document in the full body of the window

HTML Link Colors
By default, a link will appear like this (in all browsers):

An unvisited link is underlined and blue
A visited link is underlined and purple
An active link is underlined and red

<style>
a:link {
  color: green;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: pink;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: red;
  background-color: transparent;
  text-decoration: underline;
}

a:active {
  color: yellow;
  background-color: transparent;
  text-decoration: underline;
}
</style>

Cascading Style Sheets (CSS)
CSS can be added to HTML documents in 3 ways:

Inline - by using the style attribute inside HTML elements
Internal - by using a <style> element in the <head> section
External - by using a <link> element to link to an external CSS file

function show_custom_location_by_ip() {
if (!session_id()) {
session_start();
}

    $ip = $_SERVER['REMOTE_ADDR'];
    $options = get_option('custom_contact_settings', [
        'locations' => [],
        'default_location' => ''
    ]);

    // If session exists and IP matches, return stored location name
    if (isset($_SESSION['user_ip']) && $_SESSION['user_ip'] === $ip && isset($_SESSION['user_location_name'])) {
        return esc_html($_SESSION['user_location_name']);
    }

    // Get user city using Abstract API
    $geo_api_key = '676faf4b9ee34dd38924ac579a7f8323';
    $geo_url = "https://ipgeolocation.abstractapi.com/v1/?api_key={$geo_api_key}&ip_address={$ip}";

    $geo_response = @file_get_contents($geo_url);
    if ($geo_response) {
        $geo_data = json_decode($geo_response);
        if (!empty($geo_data->country_code) && $geo_data->country_code === 'US') {
            $user_city = $geo_data->city;
            $user_state_code = $geo_data->region_iso_code; // e.g., "CA" for California

            // Fetch cities for detected state from CountryStateCity API
            $csc_api_key = 'MnhqSXhYcFZTdjg0TFFOM3BFNjZtalNhN1dpY2U2Qk10OUJBSmtJdg';
            $state_code = $user_state_code;
            $csc_url = "https://api.countrystatecity.in/v1/countries/US/states/$state_code/cities";

            $args = [
                'headers' => [
                    'X-CSCAPI-KEY' => $csc_api_key
                ]
            ];

            $response = wp_remote_get($csc_url, $args);

            if (!is_wp_error($response)) {
                $body = wp_remote_retrieve_body($response);
                $cities = json_decode($body);

                foreach ($cities as $city_obj) {
                    if (strcasecmp($city_obj->name, $user_city) === 0) {
                        // Check if city is in WordPress custom locations
                        foreach ($options['locations'] as $location) {
                            if (strcasecmp($location['name'], $user_city) === 0) {
                                $_SESSION['user_ip'] = $ip;
                                $_SESSION['user_location_name'] = $location['name'];
                                return esc_html($location['name']);
                            }
                        }
                    }
                }
            }
        }
    }

    // Fall back to default location
    if (!empty($options['default_location'])) {
        foreach ($options['locations'] as $location) {
            if ($location['name'] === $options['default_location']) {
                $_SESSION['user_ip'] = $ip;
                $_SESSION['user_location_name'] = $location['name'];
                return esc_html($location['name']);
            }
        }
    }

    $_SESSION['user_ip'] = $ip;
    $_SESSION['user_location_name'] = $options['default_location'];
    return esc_html($options['default_location']);

}
add_shortcode('city_name', 'show_custom_location_by_ip');

with sessions

function show_custom_location_by_ip() {
if (!session_id()) {
session_start();
}

    $ip = $_SERVER['REMOTE_ADDR'];
    $options = get_option('custom_contact_settings', [
        'locations' => [],
        'default_location' => ''
    ]);

    // If session exists and IP matches, return stored location name
    if (isset($_SESSION['user_ip']) && $_SESSION['user_ip'] === $ip && isset($_SESSION['user_location_name'])) {
        return esc_html($_SESSION['user_location_name']);
    }

    // Fetch IP location using Abstract API
    $api_key = '676faf4b9ee34dd38924ac579a7f8323';
    $url = "https://ipgeolocation.abstractapi.com/v1/?api_key={$api_key}&ip_address={$ip}";

    $response = @file_get_contents($url);
    if ($response) {
        $data = json_decode($response);
        if (!empty($data->country_code) && $data->country_code === 'US') {
            $city = $data->city;
            // Check if city exists in stored locations
            foreach ($options['locations'] as $location) {
                if (strcasecmp($location['name'], $city) === 0) {
                    // Save in session
                    $_SESSION['user_ip'] = $ip;
                    $_SESSION['user_location_name'] = $location['name'];
                    return esc_html($location['name']);
                }
            }
        }
    }

    // Fall back to default location
    if (!empty($options['default_location'])) {
        foreach ($options['locations'] as $location) {
            if ($location['name'] === $options['default_location']) {
                $_SESSION['user_ip'] = $ip;
                $_SESSION['user_location_name'] = $location['name'];
                return esc_html($location['name']);
            }
        }
    }

    $_SESSION['user_ip'] = $ip;
    $_SESSION['user_location_name'] = $options['default_location'];
    return esc_html($options['default_location']);

}
add_shortcode('city_name', 'show_custom_location_by_ip');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function show_custom_location_by_ip() {
if (!session_id()) {
session_start();
}

    $ip = $_SERVER['REMOTE_ADDR'];
    $options = get_option('custom_contact_settings', [
        'locations' => [],
        'default_location' => ''
    ]);

    // If session exists and IP matches, return stored location name
    if (isset($_SESSION['user_ip']) && $_SESSION['user_ip'] === $ip && isset($_SESSION['user_location_name'])) {
        return esc_html($_SESSION['user_location_name']);
    }

    // Fetch IP location using Abstract API
    $api_key = '676faf4b9ee34dd38924ac579a7f8323';
    $url = "https://ipgeolocation.abstractapi.com/v1/?api_key={$api_key}&ip_address={$ip}";

    $response = @file_get_contents($url);
    if ($response) {
        $data = json_decode($response);
        if (!empty($data->country_code) && $data->country_code === 'US') {
            $city = $data->city;
            // Check if city exists in stored locations
            foreach ($options['locations'] as $location) {
                if (strcasecmp($location['name'], $city) === 0) {
                    // Save in session
                    $_SESSION['user_ip'] = $ip;
                    $_SESSION['user_location_name'] = $location['name'];
                    return esc_html($location['name']);
                }
            }
        }
    }

    // Fall back to default location
    if (!empty($options['default_location'])) {
        foreach ($options['locations'] as $location) {
            if ($location['name'] === $options['default_location']) {
                $_SESSION['user_ip'] = $ip;
                $_SESSION['user_location_name'] = $location['name'];
                return esc_html($location['name']);
            }
        }
    }

    $_SESSION['user_ip'] = $ip;
    $_SESSION['user_location_name'] = $options['default_location'];
    return esc_html($options['default_location']);

}
add_shortcode('city_name', 'show_custom_location_by_ip');

// Add the settings page to the admin menu
// Add the settings page to the admin menu
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
