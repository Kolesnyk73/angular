import { TestBed, inject } from '@angular/core/testing';

import { CommentResolverService } from './comment-resolver.service';

describe('CommentResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentResolverService]
    });
  });

  it('should be created', inject([CommentResolverService], (service: CommentResolverService) => {
    expect(service).toBeTruthy();
  }));
});
