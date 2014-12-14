import Ember from 'ember';

export default Ember.View.extend({
  /**
   * This will generate a class name of the currently active media
   * query as defined in `app/breakpoints.js`, prefixed with 'media-'
   *
   * E.g. a `mobile` breakpoint is defined and on a mobile device the
   * application DOM node will look something like:
   * 
   * ```
   * <div id="ember310" class="ember-view media-mobile">
   *   ...
   * </div>
   * ```
   *
   */
  classNameBindings: ['media.classNames']
});
