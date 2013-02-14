/**
 *      _/_/_/    _/_/    _/_/_/    _/_/_/_/        _/_/_/  _/_/_/    _/_/_/_/  _/_/_/    _/_/_/_/
 *   _/        _/    _/  _/    _/  _/            _/        _/    _/  _/        _/    _/  _/
 *  _/        _/    _/  _/    _/  _/_/_/        _/        _/_/_/    _/_/_/    _/    _/  _/_/_/
 * _/        _/    _/  _/    _/  _/            _/        _/    _/  _/        _/    _/  _/
 *  _/_/_/    _/_/    _/_/_/    _/_/_/_/        _/_/_/  _/    _/  _/_/_/_/  _/_/_/    _/_/_/_/
 *
 * @author: geraldyeo
 * Date: 5/2/13
 */

define([
           'jquery',
           'handlebars',
           'ember'
       ],

       function () {
           return function (App) {
               // map routes and resources
               App.Router.map(function () {
                   this.route('about');
                   this.resource('tables', function () {
                       this.resource('table', {path:':table_id'});
                   });
               });

               // setup controllers which are not routable...
               App.ApplicationRoute = Ember.Route.extend({
                                                             setupController:function () {
                                                                 this.controllerFor('food').set('model', App.Food.find());
                                                             }
                                                         });

               App.TablesRoute = Ember.Route.extend({
                                                        model:function () {
                                                            return App.Table.find();
                                                        }
                                                    });
           };
       }
);