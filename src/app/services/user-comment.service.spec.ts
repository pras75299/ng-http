import { TestBed, inject } from '@angular/core/testing';

import { UserCommentService } from './user-comment.service';

describe('UserCommentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserCommentService]
    });
  });

  it('should be created', inject([UserCommentService], (service: UserCommentService) => {
    expect(service).toBeTruthy();
  }));
});
