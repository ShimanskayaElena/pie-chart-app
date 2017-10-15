webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Pie Chart Update</h1>\n<p>Click the radio button to change the data displayed in the chart</p>\n<form (change)=\"selectFruit($event)\">\n    <label><input type=\"radio\" name=\"dataset\" value=\"apples\" checked>Apples</label>\n    <label><input type=\"radio\" name=\"dataset\" value=\"oranges\">Oranges</label>\n</form>\n<app-pie-chart [selectedFruit]=\"fruit\"></app-pie-chart>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.fruit = 'apples';
    }
    // determine the data that we will send to the child component
    AppComponent.prototype.selectFruit = function (event) {
        this.fruit = event.target.value;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pie_chart_pie_chart_component__ = __webpack_require__("../../../../../src/app/pie-chart/pie-chart.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__pie_chart_pie_chart_component__["a" /* PieChartComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/pie-chart/pie-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".arc text {\r\n    font: 10px sans-serif;\r\n    text-anchor: middle;\r\n}\r\n  \r\n.arc path {\r\n    stroke: #fff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pie-chart/pie-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<svg width=\"960\" height=\"500\"></svg>\n"

/***/ }),

/***/ "../../../../../src/app/pie-chart/pie-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__("../../../../d3-selection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_scale__ = __webpack_require__("../../../../d3-scale/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_shape__ = __webpack_require__("../../../../d3-shape/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_data__ = __webpack_require__("../../../../../src/app/shared/data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PieChartComponent = (function () {
    function PieChartComponent() {
    }
    PieChartComponent.prototype.ngOnInit = function () {
        this.selectFruit(this.selectedFruit);
        this.initSvg();
        this.drawChart(this.fruit);
    };
    PieChartComponent.prototype.ngOnChanges = function () {
        this.selectFruit(this.selectedFruit);
        this.initSvg();
        this.drawChart(this.fruit);
    };
    // determine which data array will need to be displayed using a chart
    PieChartComponent.prototype.selectFruit = function (value) {
        if (value === 'apples') {
            this.fruit = __WEBPACK_IMPORTED_MODULE_4__shared_data__["a" /* APPLES */];
        }
        else {
            this.fruit = __WEBPACK_IMPORTED_MODULE_4__shared_data__["b" /* ORANGES */];
        }
        return this.fruit;
    };
    PieChartComponent.prototype.initSvg = function () {
        this.svg = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["a" /* select */]('svg');
        this.width = +this.svg.attr('width');
        this.height = +this.svg.attr('height');
        this.radius = Math.min(this.width, this.height) / 2;
        /* this.color = d3Scale.scaleOrdinal()
                            .range(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56', '#d0743c', '#ff8c00']);*/
        this.color = __WEBPACK_IMPORTED_MODULE_2_d3_scale__["a" /* schemeCategory20c */];
        this.arc = __WEBPACK_IMPORTED_MODULE_3_d3_shape__["a" /* arc */]()
            .outerRadius(this.radius - 10)
            .innerRadius(this.radius - 70);
        this.pie = __WEBPACK_IMPORTED_MODULE_3_d3_shape__["b" /* pie */]()
            .sort(null)
            .value(function (d) { return d; });
        this.svg = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["a" /* select */]('svg')
            .append('g')
            .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')');
    };
    PieChartComponent.prototype.drawChart = function (data) {
        var _this = this;
        var g = this.svg.selectAll('.arc')
            .data(this.pie(data))
            .enter().append('g');
        // .attr('class', 'arc');
        g.append('path').attr('d', this.arc)
            .style('fill', function (d, i) { return _this.color[i]; });
        /* g.append('text')
          .attr('transform', d => 'translate(' + this.arc.centroid(d) + ')')
          .attr('dy', '.35em')
          .text(d => d.data.age);*/
    };
    return PieChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], PieChartComponent.prototype, "selectedFruit", void 0);
PieChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-pie-chart',
        template: __webpack_require__("../../../../../src/app/pie-chart/pie-chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pie-chart/pie-chart.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PieChartComponent);

//# sourceMappingURL=pie-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APPLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ORANGES; });
var APPLES = [53245, 28479, 19697, 24037, 40245];
var ORANGES = [200, 200, 200, 200, 200];
/* export const DATA_SAMPLE: any[] = [
    {age: '<5', population: 2704659},
    {age: '5-13', population: 4499890},
    {age: '14-17', population: 2159981},
    {age: '18-24', population: 3853788},
    {age: '25-44', population: 14106543},
    {age: '45-64', population: 8819342},
    {age: '≥65', population: 612463}
];*/
//# sourceMappingURL=data.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map