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
           'ember',
           'emdata'
       ],

       function (AppView, routesMappings, templatesObj) {
           return function (window) {
               // Ember App
               $.extend(Ember.TEMPLATES, templatesObj);

               var App = window.MyApp = Ember.Application.create();

               // Routes
               App.Router.map(routesMappings);

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

               // Controllers
               // Implement explicitly to use the object proxy.
               App.TablesController = Ember.ArrayController.extend({
                                                                       sortProperties:['id']
                                                                   });

               App.FoodController = Ember.ArrayController.extend();

               App.TabController = Ember.ObjectController.extend();

               // Models
               App.Store = DS.Store.extend({
                                               revision:11,
                                               adapter :'DS.FixtureAdapter'
                                           });

               App.Table = DS.Model.extend({
                                               tab:DS.belongsTo('App.Tab')
                                           });

               App.Tab = DS.Model.extend({
                                             tabItems:DS.hasMany('App.TabItem'),
                                             cents   :function () {
                                                 return this.get('tabItems').getEach('cents').reduce(function (accum, item) {
                                                     return accum + item;
                                                 }, 0);
                                             }.property('tabItems.@each.cents'),

                                             didLoad:function () {
                                                 console.log('Tab DidLoad');
                                             }
                                         });

               App.TabItem = DS.Model.extend({
                                                 cents:DS.attr('number'),
                                                 food :DS.belongsTo('App.Food')
                                             });

               App.Food = DS.Model.extend({
                                              name    :DS.attr('string'),
                                              imageUrl:DS.attr('string'),
                                              cents   :DS.attr('number')
                                          });

               App.Table.FIXTURES = [
                   {
                       id :1,
                       tab:1
                   },
                   {
                       id :2,
                       tab:2
                   },
                   {
                       id :3,
                       tab:3
                   },
                   {
                       id :4,
                       tab:4
                   },
                   {
                       id :5,
                       tab:5
                   },
                   {
                       id :6,
                       tab:6
                   }
               ];

               App.Tab.FIXTURES = [
                   {
                       id      :1,
                       tabItems:[]
                   },
                   {
                       id      :2,
                       tabItems:[]
                   },
                   {
                       id      :3,
                       tabItems:[]
                   },
                   {
                       id      :4,
                       tabItems:[400, 401, 402, 403, 404]
                   },
                   {
                       id      :5,
                       tabItems:[]
                   },
                   {
                       id      :6,
                       tabItems:[]
                   }
               ];

               App.TabItem.FIXTURES = [
                   {
                       id   :400,
                       cents:1500,
                       food :1
                   },
                   {
                       id   :401,
                       cents:300,
                       food :2
                   },
                   {
                       id   :402,
                       cents:700,
                       food :3
                   },
                   {
                       id   :403,
                       cents:950,
                       food :4
                   },
                   {
                       id   :404,
                       cents:2000,
                       food :5
                   }
               ];

               App.Food.FIXTURES = [
                   {
                       id      :1,
                       name    :'Pizza',
                       imageUrl:'images/pizza.png',
                       cents   :1500
                   },
                   {
                       id      :2,
                       name    :'Pancakes',
                       imageUrl:'images/pancakes.png',
                       cents   :300
                   },
                   {
                       id      :3,
                       name    :'Fries',
                       imageUrl:'images/fries.png',
                       cents   :700
                   },
                   {
                       id      :4,
                       name    :'Hot Dog',
                       imageUrl:'images/hotdog.png',
                       cents   :950
                   },
                   {
                       id      :5,
                       name    :'Birthday Cake',
                       imageUrl:'images/birthdaycake.png',
                       cents   :2000
                   }
               ];

           };
       }
);