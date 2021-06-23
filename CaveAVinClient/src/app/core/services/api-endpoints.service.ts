// Angular Modules
import {Injectable} from '@angular/core';
// Application Classes

// Application Constants
import {Constants} from 'src/app/config/constants';
import {UrlBuilder} from "../../shared/Classes/url-builder";
import {QueryStringParameters} from "../../shared/Classes/query-string-parameters";

const END_POINT_REGION = 'regions';
const END_POINT_COULEUR = 'couleurs';
const END_POINT_BOUTEILLE = 'bouteilles';
const END_POINT_BOUTEILLES_TRIEES = END_POINT_BOUTEILLE+'/trier';

@Injectable()
export class ApiEndpointsService {
  constructor(
    // Application Constants
    private constants: Constants
  ) {
  }  /* #regions URL CREATOR */

  // URL
  private createUrl(
    action: string,
    isMockAPI: boolean = false
  ): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      isMockAPI ? this.constants.API_MOCK_ENDPOINT :
        this.constants.API_ENDPOINT,
      action
    );
    return urlBuilder.toString();
  }  // URL WITH QUERY PARAMS
  private createUrlWithQueryParameters(
    action: string,
    queryStringHandler?:
      (queryStringParameters: QueryStringParameters) => void
  ): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      this.constants.API_ENDPOINT,
      action
    );
    // Push extra query string params
    if (queryStringHandler) {
      queryStringHandler(urlBuilder.queryString);
    }
    return urlBuilder.toString();
  }

  // URL WITH PATH VARIABLES
  private createUrlWithPathVariables(
    action: string,
    pathVariables: any[] = []
  ): string {
    let encodedPathVariablesUrl: string = '';
    // Push extra path variables
    for (const pathVariable of pathVariables) {
      if (pathVariable !== null) {
        encodedPathVariablesUrl +=
          `/${encodeURIComponent(pathVariable.toString())}`;
      }
    }
    const urlBuilder: UrlBuilder = new UrlBuilder(
      this.constants.API_ENDPOINT,
      `${action}${encodedPathVariablesUrl}`
    );
    return urlBuilder.toString();
  }

  public getRegionsEndpoint(){
      return this.createUrl(END_POINT_REGION);
  }

  public getRegionWithIdEndpoint(id:number ){
    return this.createUrlWithPathVariables(END_POINT_REGION,[id]);
  }

  public getCouleursEndpoint(){
    return this.createUrl(END_POINT_COULEUR);
  }

  public getCouleurWithIdEndpoint(id:number ){
    return this.createUrlWithPathVariables(END_POINT_COULEUR,[id]);
  }

  public getBouteillesEndpoint(){
    return this.createUrl(END_POINT_BOUTEILLE);
  }

  public getBouteilleWithIdEndpoint(id:number ){
    return this.createUrlWithPathVariables(END_POINT_BOUTEILLE,[id]);
  }
  public getBouteillesSortByEndpoint(chaine:string ){
    return this.createUrlWithPathVariables(END_POINT_BOUTEILLES_TRIEES,[chaine]);
  }


  /* #endregion */
}
