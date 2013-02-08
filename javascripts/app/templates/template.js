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
           'text!app/templates/application.hbs',
           'text!app/templates/page-main.hbs',
           'text!app/templates/page-about.hbs',
           'text!app/templates/page-tables.hbs',
           'text!app/templates/index-tables.hbs',
           'text!app/templates/sect-table.hbs',
           'text!app/templates/sect-food.hbs',
           'text!app/templates/partials/table-menu.hbs',
           'jquery',
           'handlebars',
           'ember'
       ],

       function (app_tpl, mainPage_tpl, aboutPage_tpl, tablesPage_tpl, tablesIndex_tpl, tableSect_tpl, foodSect_tpl, tableMenu_part) {
           return {
               // pages
               "application" :Ember.Handlebars.compile(app_tpl),
               "index"       :Ember.Handlebars.compile(mainPage_tpl),
               "about"       :Ember.Handlebars.compile(aboutPage_tpl),
               "tables"      :Ember.Handlebars.compile(tablesPage_tpl),

               // sections
               "tables/index":Ember.Handlebars.compile(tablesIndex_tpl),
               "table"       :Ember.Handlebars.compile(tableSect_tpl),
               "food"        :Ember.Handlebars.compile(foodSect_tpl),

               // partials
               "_tableMenu"  :Ember.Handlebars.compile(tableMenu_part)
           };
       }
);