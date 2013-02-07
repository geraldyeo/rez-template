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
           'text!app/templates/main-page.hbs',
           'text!app/templates/about-page.hbs',
           'jquery',
           'handlebars',
           'ember'
       ],

       function (app_tpl, mainPage_tpl, aboutPage_tpl) {
           return {
               "appl" :Ember.Handlebars.compile(app_tpl),
               "index":Ember.Handlebars.compile(mainPage_tpl),
               "about":Ember.Handlebars.compile(aboutPage_tpl)
           };
       }
);