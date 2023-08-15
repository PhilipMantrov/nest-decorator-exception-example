import { Controller } from '@nestjs/common';
import {
  Empty,
  TestServiceControllerMethods,
} from '../../definitions/generated/test/test';
import { Observable } from 'rxjs';

@Controller('test')
@TestServiceControllerMethods()
export class TestController {
  // Uncomment testMethod for make example project properly built and work
  /*public testMethod(request: Empty, metadata?): Observable<Empty> {
    return undefined;
  }*/
}
