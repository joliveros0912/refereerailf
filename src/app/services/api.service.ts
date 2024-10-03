import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  historial:any[]=[];
  private baseUrl: string = 'https://refererail-production.up.railway.app/api/';

  constructor(private http: HttpClient) { }

  agregar(datos: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.baseUrl + 'arbitros/', JSON.stringify(datos), { headers })
      .pipe(
        catchError(this.handleError)
      );
  }
  agregarOrganizador(datos: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.baseUrl + 'organizadores/', JSON.stringify(datos), { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  
  agregarevento(datos: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.baseUrl + 'evento/', JSON.stringify(datos), { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      console.error('Error del lado del cliente:', error.error.message);
    } else {
      // El servidor retornó un código de error
      console.error(
        `Código de error ${error.status}, ` +
        `Error: ${JSON.stringify(error.error)}`); // Imprime el objeto completo de error para obtener más detalles
    }
    // Retorna un observable con un mensaje de error
    return throwError('Ocurrió un error inesperado. Por favor, intenta nuevamente más tarde.');
  }


  getUser_cedula_O(cedula: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}organizadores/${cedula}`)
      .pipe(
        catchError(this.handleError)
      );
  }
  getUser_cedula_a(cedula: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}arbitros/${cedula}`)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  actualizarEvento(idEvento: number, arbitrosId: string, nuevoEstado: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}evento/${idEvento}`).pipe(
      switchMap(historial => {
        console.log('Historial:', historial);
        const url = `${this.baseUrl}evento/${idEvento}/`; // Ajusta la ruta de acuerdo a tu API
        const body = {
          id: historial.id,
          fecha_de_inicio: historial.fecha_de_inicio,
          fecha_de_finalizacion: historial.fecha_de_finalizacion,
          hora: historial.hora,
          localidad: historial.localidad,
          lugar: historial.lugar,
          tipo: historial.tipo,
          tipo_de_arbitro: historial.tipo_de_arbitro,
          estado: nuevoEstado,
          arbitros: arbitrosId,
          organizador: historial.organizador
        };
        return this.http.put(url, body);
      }),
      catchError(this.handleError)
    );
}
}