import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get all companies
   *  With filtering:
   *     - name (search for similar case-insensitve names)
   */

  static async getCompanies(filter) {
    let requestString = 'companies'
    if (filter && filter.name) {
      requestString += '?name=' + filter.name;
    }
    let res = await this.request(requestString)
    return res.companies;
  }

  /** Get all jobs */

  static async getJobs(filter) {
    let requestString = 'jobs'
    if (filter && filter.name) {
      requestString += '?title=' + filter.name;
    }
    let res = await this.request(requestString)
    return res.jobs;
  }

  /** Login User */

  static async loginUser(data) {
    let res = await this.request('auth/token', data, 'POST')
    return res;
  }
 
  /** Register User */

  static async registerUser(data) {
    let res = await this.request('auth/register', data, 'POST')
    return res;
  }

  /** Get user info by token */

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res;
  }

  /** Patch user (firstName, lastName, email) */

  static async patchUser(username, data) {
    let res = await this.request(`users/${username}`, data, 'PATCH')
    return res;
  }

  /** Apply to Job */

  static async applyToJob(username, jobId) {
    await this.request(`users/${username}/jobs/${jobId}`, {}, 'POST')
  }
}

export default JoblyApi;