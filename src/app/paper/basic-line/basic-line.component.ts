import { AfterViewInit, Component, OnInit } from '@angular/core';
import paper, { Color, Point } from 'paper';

@Component({
  selector: 'app-basic-line',
  templateUrl: './basic-line.component.html',
  styleUrls: ['./basic-line.component.scss']
})
export class BasicLineComponent implements AfterViewInit {

  ngAfterViewInit() {
    const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
    paper.setup(canvas);

    // Create a Paper.js Path to draw a line into it:
		var path = new paper.Path();
		// Give the stroke a color
		path.strokeColor = new Color('black');
		var start = new paper.Point(100, 100);
		// Move to start and draw a line from there
		path.moveTo(start);
		// Note that the plus operator on Point objects does not work
		// in JavaScript. Instead, we need to call the add() function:
		path.lineTo(start.add( new Point([ 200, -50 ])));
		// Draw the view now:
		(paper.view as any).draw();
  }

}
