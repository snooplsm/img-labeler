import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http: HttpClient) { }
  public githubToken: string;
  public gitTokenHeader;

  private setHeaders(): void {
    this.gitTokenHeader = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': localStorage.getItem('gitToken')
    });
  }
  
  public getGithubCode(): Observable<any> {
    const url = 'https://github.com/login/oauth/authorize';
    let params = new HttpParams().set('client_id', 'Iv1.bb95ef788cf51da0');
    params = params.set('scope', 'public_repo');
    return this.http.get(url, {params});
  }

  public getGithubToken(code: string): Observable<any> {
    const url = `https://z4nv5b8ws6.execute-api.us-east-1.amazonaws.com/default/img-labeler-token-endpoint?code=${code}`;
    return this.http.get(url);
  }

  public getUserInfo(): Observable<any> {
    this.setHeaders();
    const url = `https://api.github.com/user`;
    return this.http.get(url, {headers: this.gitTokenHeader});
  }

  public getUserRepos(user: string): Observable<any> {
    this.setHeaders();
    const url = `https://api.github.com/users/${user}/repos`;
    return this.http.get(url, {headers: this.gitTokenHeader});
  }

  public getRepoBranches(user: string): Observable<any> {
    this.setHeaders();
    const url = `https://api.github.com/repos/${user}/reported10k/branches`;
    return this.http.get(url, {headers: this.gitTokenHeader});
  }

  public createCommit(user: string, message: string): Observable<any> {
    this.setHeaders();
    const url = `https://api.github.com/repos/${user}/reported10k/branches`;
    return this.http.get(url, {headers: this.gitTokenHeader});
  }

  public getTree(user: string, sha: string): Observable<any> {
    this.setHeaders();
    const url = `https://api.github.com/repos/${user}/reported10k/git/trees/${sha}`;
    return this.http.get(url, {headers: this.gitTokenHeader});
  }

  public commitFile(user: string, message: string, content: string, sha: string, branch: string, imageName: string) {
    this.setHeaders();
    const body = {
      "message": message,
      "sha": sha,
      "branch": branch,
      "content": content
    };
    let header = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': localStorage.getItem('gitToken')
    });
    let url = `https://api.github.com/repos/${user}/reported10k/contents/masks/${imageName}`;
    if(imageName.indexOf('_') === 5){
      url = `https://api.github.com/repos/${user}/reported10k/contents/masks2/${imageName}`;
    }
    if(imageName.indexOf('_') === -1){
      url = `https://api.github.com/repos/${user}/reported10k/contents/masksd/${imageName}`;
    }
    return this.http.put(url, body, {headers: header});
  }
}
