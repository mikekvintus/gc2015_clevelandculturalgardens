<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'WPCACHEHOME', '/home4/mdifilm/public_html/devcleculturalgardens.org/wp-content/plugins/wp-super-cache/' ); //Added by WP-Cache Manager
define('WP_CACHE', true); //Added by WP-Cache Manager
define('DB_NAME', 'mdifilm_wrdp18dev');

/** MySQL database username */
define('DB_USER', 'mdifilm_wrdp18');

/** MySQL database password */
define('DB_PASSWORD', '7AhJUoYpytlAcve');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '__D><d5K88Qiw\`V#8BPYLyGK>|Zis~Xg0ESP(I@VhT\`7C@h7WG^^_E<uykN>L');
define('SECURE_AUTH_KEY',  'mmFLc!\`T<LI:NYAHFHmI6$R(Wfb/pqj<9:jS8eO-!QoTe-0mV:$~A<_Hv_usd$n<Flfs<l2i');
define('LOGGED_IN_KEY',    '8FdmJ>GdBL>/V/NbKK7Kv~T7<^YKIL?h!*>yJ8Nc*21w49BHO^Sr)Y;1s\`:tCi>kgewnZZNa6');
define('NONCE_KEY',        'r=w4FgtlqNKSt?vSFBRd6-z#(Cv:fgzt4Nl?RE*0GhSko\`SSEwwC7ri_1xxQ*_CeMN\`S|;o;BDzb|5^n9w');
define('AUTH_SALT',        '^uoWpQ>xZ;7euQ6-:0Q^5u0Vb4W3T/<_M6tawVRnd~by=\`;sqfmyTT1_:m^#1W5\`FEb*:eIa');
define('SECURE_AUTH_SALT', '7WPAAPp6ri^NlA|\`llDNIV~d;(|5_S2e5K2U(spie2vNQ$Q@OWO$$)rn5@fBj5kfi;v/w7A>M6R:;hAdkF);TM<');
define('LOGGED_IN_SALT',   'W6r!r:(FD!B|C~DarZvF4i/jRLk!!8Sa8~*SFQckK;!qd#PGK42h(_pGW|sCiG:#N0|)F<v0;oF!1bD~8;VZr');
define('NONCE_SALT',       '6QyzZM78TOAtFFh^BV8#*E0fRYzYmq0fj-wuQvsprpNWA10(DoBbI>:tY@|#w~Af4EBF<6lA');

/**#@-*/
define('AUTOSAVE_INTERVAL', 600 );
define('WP_POST_REVISIONS', 1);
define( 'WP_CRON_LOCK_TIMEOUT', 120 );
define( 'WP_AUTO_UPDATE_CORE', true );
/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
add_filter( 'auto_update_plugin', '__return_true' );
add_filter( 'auto_update_theme', '__return_true' );
