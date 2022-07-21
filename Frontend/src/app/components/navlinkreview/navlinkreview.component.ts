import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';
import { Reviews } from 'src/app/interfaces/reviews';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navlinkreview',
  templateUrl: './navlinkreview.component.html',
  styleUrls: ['./navlinkreview.component.scss']
})
export class NavlinkreviewComponent implements OnInit {
  review!: Reviews[];
  ReviewForm!: FormGroup;

  constructor(private reviewService: ReviewService,
    private FormBuilderReview: FormBuilder,
  ) {
    this.reviewService.getReview().subscribe((results) => {
      this.review = results;
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }
  addReview() {
    console.log(this.ReviewForm.value);
    this.reviewService.newReview(this.ReviewForm.value).subscribe(() => {
      alert('New review added successfully');
      this.ReviewForm.reset();
      window.location.reload();
    });
  }
  get name() {
    return this.ReviewForm.get('name');
  }
  get comment() {
    return this.ReviewForm.get('comment');
  }
  get rating() {
    return this.ReviewForm.get('rating');
  }

  //StarRating
  starRating: number = 0;
  starCount: number = 5;
  onRatingChanged(starRating: number) {
    this.ReviewForm.value.rating = starRating;
    this.starRating = starRating;
    console.log(this.starRating);
  }

}
