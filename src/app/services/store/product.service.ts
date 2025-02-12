import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {StoreBaseService} from '../generic/store-base.service';
import {BaseSearchModel} from '../../data-services/search/base-search.model';
import {ProductModel} from '../../data-services/schema/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends StoreBaseService {
  public search(search: BaseSearchModel<ProductModel[]>): Observable<any> {
    return this.post('/api/product/search', search);
  }

  public getById(id: number): Observable<any> {
    return this.get('/api/product/' + id);
  }

  public getFullById(id: number): Observable<any> {
    return this.get('/api/product/get-full/' + id);
  }

  public save(product: ProductModel): Observable<any> {
    return this.post('/api/product/insert', product);
  }

  public update(product: ProductModel): Observable<any> {
    return this.put('/api/product/update', product);
  }

  public deleteProduct(id: number): Observable<any> {
    return this.delete('/api/product/delete/' + id);
  }

  public getList(id: number): Observable<any>{
    return this.get('/api/product/get-list/' + id);
  }

  public getListByCategory(id: number): Observable<any> {
    return this.get('/api/product/get-list-by-category/' + id);
  }

  public getAll(): Observable<any> {
    return this.get('/api/product/get-all');
  }

  public getLikeName(name: string): Observable<any> {
    return this.get('/api/product/get-like-name/' + name);
  }
}
