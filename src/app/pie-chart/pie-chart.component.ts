import { Component, OnInit, OnChanges, Input } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';

import { APPLES, ORANGES } from '../shared/data';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, OnChanges {

  @Input() selectedFruit: string;

  private fruit: number[];
  private width: number;
  private height: number;
  private radius: number;

  private arc: any;
  private pie: any;
  private color: any;
  private svg: any;

  constructor() {}

  ngOnInit() {
    this.selectFruit(this.selectedFruit);
    this.initSvg();
    this.drawChart(this.fruit);
  }

  ngOnChanges() {
    this.selectFruit(this.selectedFruit);
    this.initSvg();
    this.drawChart(this.fruit);
  }

  // determine which data array will need to be displayed using a chart
  private selectFruit(value: string): number[] {

    if ( value === 'apples') {
      this.fruit = APPLES;
    } else {
       this.fruit = ORANGES;
    }
    return this.fruit;
  }

  private initSvg() {

    this.svg = d3.select('svg');

    this.width = +this.svg.attr('width');
    this.height = +this.svg.attr('height');
    this.radius = Math.min(this.width, this.height) / 2;

    /* this.color = d3Scale.scaleOrdinal()
                        .range(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56', '#d0743c', '#ff8c00']);*/

    this.color = d3Scale.schemeCategory20c;

    this.arc = d3Shape.arc()
                      .outerRadius(this.radius - 10)
                      .innerRadius(this.radius - 70);

    this.pie = d3Shape.pie()
                      .sort(null)
                     // .value((d: any) => d.population);
                     .value((d: any) => d );

    this.svg = d3.select('svg')
                 .append('g')
                 .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')');
  }

  private drawChart(data: number[]) {

    const g = this.svg.selectAll('.arc')
                      .data(this.pie(data))
                      .enter().append('g');
                     // .attr('class', 'arc');

    g.append('path').attr('d', this.arc)
     // .style('fill', (d: any) => this.color(d.data.age) );
     .style('fill', (d: any, i: any) => this.color[i] );

   /* g.append('text')
     .attr('transform', d => 'translate(' + this.arc.centroid(d) + ')')
     .attr('dy', '.35em')
     .text(d => d.data.age);*/
  }
}
