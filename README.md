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
