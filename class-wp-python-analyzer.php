<?php
/*
 * Plugin name: Python code analyzer
 * Description: Embed wigets for live analysis of Python code
 * Version: 0.0.1
 */

function python_analyzer_render_block($attributes, $content) {
  return '<div class="monkey_pie">small happy hamster</div>';
}

function python_analyzer_register_block() {

  // automatically load dependencies and version
  $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

  wp_register_script(
      'wp-analyzer-script',
      plugins_url( 'build/index.js', __FILE__ ),
      $asset_file['dependencies'],
      $asset_file['version']
  );

  register_block_type(
    'myguten/test-block',
    array(
      'editor_script' => 'wp-analyzer-script'
    )
  );
}

function python_analyzer_front_end_scripts() {
  wp_enqueue_script(
      'wp-analyzer-script',
      plugins_url( 'build/index.js', __FILE__ ),
  );
}

add_action('init', 'python_analyzer_register_block' );
add_action('wp_enqueue_scripts', 'python_analyzer_front_end_scripts');
