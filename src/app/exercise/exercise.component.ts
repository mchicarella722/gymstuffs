import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
export class Exercise {
  name: string;
//  reps: number;
//  sets: number;
//  weight: number;
//  weight_unit: string;
//  time: number;
//  time_unit: string;
  constructor(name: string) {
      this.name = name;
     // this.reps = 0;
     // this.reps = 0;
     // this.weight = 0;
     // this.weight_unit = "";
     // this.time = 0;
     // this.time_unit = "";
  }
}

export class Recorder{

  exercises: Exercise[] = [];
  completed: Exercise[] = [];

  drawExercises(){
      $("#exercises").html(
          this.exercises.map(x => `<button class="list-group-item" id="cmd-add">${x.name}</button>`).join("")
      )
  }

  drawMyExercises(){
      $("#my-exercises").html(
          this.completed.map(x => `<li class="list-group-item">${x.name}</li>`).join("")
      )
  }

  init(){
      return $.when(
          $.getJSON("http://localhost:4201/exercises").done( data => {
              this.exercises = data;
          })
      );
  }
}

const recorder = new Recorder();
let empty:boolean = true;

recorder.init().done(() => {
  recorder.drawExercises();

  $('.list-group-item').click(function(e) {
      e.preventDefault();
      const workoutName = e.target.textContent;
      if(empty) {
          document.getElementById('default-message').remove();
          empty = false;
      }
      const newExercise = new Exercise(workoutName);
      recorder.completed.push(newExercise);
      console.log(recorder.completed);
      recorder.drawMyExercises();
  });
});
