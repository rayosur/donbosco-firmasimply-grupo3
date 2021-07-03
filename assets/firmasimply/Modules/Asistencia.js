import {
  listadoFirmas,
  firmar,
  getNumFirmasHoy,
 } from './API/llamadasApi.js';

const TOKEN = JSON.parse(localStorage.getItem('token'));

export default class Asistencia {
    /**
     * Devuelve el listado de firmas
     * @returns
     */
    static async getlistadoFirmas() {
        return await listadoFirmas(TOKEN);
    }

    /**
     * Registrar firma de asistencia
     * El objeto firma debe contener los siguientes parametros
     * user_id [required]
     * nota [optional]
     * estado [required]
     * @param {*} firma
     * @returns
     */
    static firmar(firma) {
        return firmar(TOKEN, firma)
    }

    /**
     * Devlueve el numero de firmas registradas de hoy
     * @param {*} coderId
     * @returns
     */
    static getNumFirmasHoy() {
        return getNumFirmasHoy(TOKEN);
    }
    
}
// Consultar el listado de firmas
Asistencia.getlistadoFirmas();

// Registrar una firma
let firma = {
	user_id: Auth.getCoder().id,
	nota: 'texto test',
	estado: 1 // 1 para entrada, 0 para salida
};
Asistencia.firmar(firma);

// Consultar el número de firmas de hoy
Asistencia.getNumFirmasHoy();