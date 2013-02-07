/**
 *      _/_/_/    _/_/    _/_/_/    _/_/_/_/        _/_/_/  _/_/_/    _/_/_/_/  _/_/_/    _/_/_/_/
 *   _/        _/    _/  _/    _/  _/            _/        _/    _/  _/        _/    _/  _/
 *  _/        _/    _/  _/    _/  _/_/_/        _/        _/_/_/    _/_/_/    _/    _/  _/_/_/
 * _/        _/    _/  _/    _/  _/            _/        _/    _/  _/        _/    _/  _/
 *  _/_/_/    _/_/    _/_/_/    _/_/_/_/        _/_/_/  _/    _/  _/_/_/_/  _/_/_/    _/_/_/_/
 *
 * @author: geraldyeo
 * Date: 7/2/13
 */

define([
           'app/views/application',
           'app/routes/map',
           'app/templates/template',
           'jquery',
           'handlebars',
           'ember'
       ],

       function (AppView, routesMappings, templatesObj) {
           return function (window) {
               // Ember App
               $.extend(Ember.TEMPLATES, templatesObj);

               var App = window.MyApp = Ember.Application.create({
                                                                     VERSION        :'1.0',
                                                                     rootElement    :'#app',
                                                                     ApplicationView:AppView
                                                                 });

               // Routes
               App.Router.map(routesMappings);
           };
       }
);