import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';
class SDK {
    constructor() {
        this.spec = Oas.init(definition);
        this.core = new APICore(this.spec, 'lodgify/v2 (api/6.1.2)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config) {
        this.core.setConfig(config);
    }
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values) {
        this.core.setAuth(...values);
        return this;
    }
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url, variables = {}) {
        this.core.setServer(url, variables);
    }
    /**
     * Returns a paged list of all properties
     *
     * @summary Properties info list
     * @throws FetchError<400, types.GetAllPropertiesAsyncResponse400> Bad Request
     * @throws FetchError<401, types.GetAllPropertiesAsyncResponse401> Unauthorized
     * @throws FetchError<404, types.GetAllPropertiesAsyncResponse404> Not Found
     * @throws FetchError<500, types.GetAllPropertiesAsyncResponse500> Server Error
     */
    getAllPropertiesAsync(metadata) {
        return this.core.fetch('/v2/properties', 'get', metadata);
    }
    /**
     * Get the basic info for a given property
     *
     * @summary Property info by Id
     * @throws FetchError<400, types.GetPropertyByIdV2Response400> Bad Request
     * @throws FetchError<401, types.GetPropertyByIdV2Response401> Unauthorized
     * @throws FetchError<404, types.GetPropertyByIdV2Response404> Not Found
     * @throws FetchError<500, types.GetPropertyByIdV2Response500> Server Error
     */
    getPropertyByIdV2(metadata) {
        return this.core.fetch('/v2/properties/{id}', 'get', metadata);
    }
    /**
     * Returns all the roomtypes available for a given property
     *
     * @summary Available rooms
     * @throws FetchError<400, types.GetV2PropertiesIdRoomsResponse400> Bad Request
     * @throws FetchError<401, types.GetV2PropertiesIdRoomsResponse401> Unauthorized
     * @throws FetchError<404, types.GetV2PropertiesIdRoomsResponse404> Not Found
     * @throws FetchError<500, types.GetV2PropertiesIdRoomsResponse500> Server Error
     */
    getV2PropertiesIdRooms(metadata) {
        return this.core.fetch('/v2/properties/{id}/rooms', 'get', metadata);
    }
    /**
     * Returns a paged list of all deleted properties since some date
     *
     * @summary Gets deleted properties
     * @throws FetchError<400, types.GetAllDeletedAsyncResponse400> Bad Request
     * @throws FetchError<401, types.GetAllDeletedAsyncResponse401> Unauthorized
     * @throws FetchError<404, types.GetAllDeletedAsyncResponse404> Not Found
     * @throws FetchError<500, types.GetAllDeletedAsyncResponse500> Server Error
     */
    getAllDeletedAsync(metadata) {
        return this.core.fetch('/v2/deletedProperties', 'get', metadata);
    }
    /**
     * Returns daily rates calendar for room types requested by roomTypeId or houseId.
     *
     * @summary Daily rates
     * @throws FetchError<400, types.RatesCalendarV2Response400> Bad Request
     * @throws FetchError<401, types.RatesCalendarV2Response401> Unauthorized
     * @throws FetchError<404, types.RatesCalendarV2Response404> Not Found
     * @throws FetchError<500, types.RatesCalendarV2Response500> Server Error
     */
    ratesCalendarV2(metadata) {
        return this.core.fetch('/v2/rates/calendar', 'get', metadata);
    }
    /**
     * Returns rate settings for the houseId.
     *
     * @summary Rate's settings
     * @throws FetchError<400, types.RateSettingsV2Response400> Bad Request
     * @throws FetchError<401, types.RateSettingsV2Response401> Unauthorized
     * @throws FetchError<404, types.RateSettingsV2Response404> Not Found
     * @throws FetchError<500, types.RateSettingsV2Response500> Server Error
     */
    rateSettingsV2(metadata) {
        return this.core.fetch('/v2/rates/settings', 'get', metadata);
    }
    /**
     * Lists availability information for a given period for the calling user.
     *
     * @summary Gets all availabilites
     * @throws FetchError<400, types.GetCalendarByUserResponse400> Bad Request
     * @throws FetchError<401, types.GetCalendarByUserResponse401> Unauthorized
     * @throws FetchError<404, types.GetCalendarByUserResponse404> Not Found
     * @throws FetchError<500, types.GetCalendarByUserResponse500> Server Error
     */
    getCalendarByUser(metadata) {
        return this.core.fetch('/v2/availability', 'get', metadata);
    }
    /**
     * Lists availability information for a given period for a specific property of the calling
     * user.
     *
     * @summary Gets availability for a property
     * @throws FetchError<400, types.GetCalendarByPropertyResponse400> Bad Request
     * @throws FetchError<401, types.GetCalendarByPropertyResponse401> Unauthorized
     * @throws FetchError<404, types.GetCalendarByPropertyResponse404> Not Found
     * @throws FetchError<500, types.GetCalendarByPropertyResponse500> Server Error
     */
    getCalendarByProperty(metadata) {
        return this.core.fetch('/v2/availability/{propertyId}', 'get', metadata);
    }
    /**
     * Lists availability information for a given period for a specific room in a property of
     * the calling user.
     *
     * @summary Gets availability for a room
     * @throws FetchError<400, types.GetCalendarByRoomTypeResponse400> Bad Request
     * @throws FetchError<401, types.GetCalendarByRoomTypeResponse401> Unauthorized
     * @throws FetchError<404, types.GetCalendarByRoomTypeResponse404> Not Found
     * @throws FetchError<500, types.GetCalendarByRoomTypeResponse500> Server Error
     */
    getCalendarByRoomType(metadata) {
        return this.core.fetch('/v2/availability/{propertyId}/{roomTypeId}', 'get', metadata);
    }
    /**
     * Retrieve a list of bookings matching the query parameters
     *
     * @summary List of bookings
     * @throws FetchError<400, types.GetAllAsyncResponse400> Bad Request
     * @throws FetchError<401, types.GetAllAsyncResponse401> Unauthorized
     * @throws FetchError<404, types.GetAllAsyncResponse404> Not Found
     * @throws FetchError<500, types.GetAllAsyncResponse500> Server Error
     */
    getAllAsync(metadata) {
        return this.core.fetch('/v2/reservations/bookings', 'get', metadata);
    }
    updateKeyCodes(body, metadata) {
        return this.core.fetch('/v2/reservations/bookings/{id}/keyCodes', 'put', body, metadata);
    }
    /**
     * Get the list of external bookings belonging to the specified Id.
     *
     * @summary External bookings by Booking id
     * @throws FetchError<400, types.GetExternalBookingsAsyncResponse400> Bad Request
     * @throws FetchError<401, types.GetExternalBookingsAsyncResponse401> Unauthorized
     * @throws FetchError<404, types.GetExternalBookingsAsyncResponse404> Not Found
     * @throws FetchError<500, types.GetExternalBookingsAsyncResponse500> Server Error
     */
    getExternalBookingsAsync(metadata) {
        return this.core.fetch('/v2/reservations/bookings/{id}/externalBookings', 'get', metadata);
    }
    /**
     * Booking by id
     *
     * @throws FetchError<400, types.GetAsyncResponse400> Bad Request
     * @throws FetchError<401, types.GetAsyncResponse401> Unauthorized
     * @throws FetchError<404, types.GetAsyncResponse404> Not Found
     * @throws FetchError<500, types.GetAsyncResponse500> Server Error
     */
    getAsync(metadata) {
        return this.core.fetch('/v2/reservations/bookings/{id}', 'get', metadata);
    }
    /**
     * Retrieve the next payment link for a Booking
     *
     * @summary Gets a booking's payment link
     * @throws FetchError<400, types.GetPaymentLinkAsyncResponse400> Bad Request
     * @throws FetchError<401, types.GetPaymentLinkAsyncResponse401> Unauthorized
     * @throws FetchError<404, types.GetPaymentLinkAsyncResponse404> Not Found
     * @throws FetchError<500, types.GetPaymentLinkAsyncResponse500> Server Error
     */
    getPaymentLinkAsync(metadata) {
        return this.core.fetch('/v2/reservations/bookings/{id}/quote/paymentLink', 'get', metadata);
    }
    createPaymentLinkAsync(body, metadata) {
        return this.core.fetch('/v2/reservations/bookings/{id}/quote/paymentLink', 'post', body, metadata);
    }
    /**
     * Checkin a booking at the specified time
     *
     * @summary Checkin a booking at the specified time
     * @throws FetchError<400, types.PutV2ReservationsBookingsIdCheckinResponse400> Bad Request
     * @throws FetchError<401, types.PutV2ReservationsBookingsIdCheckinResponse401> Unauthorized
     * @throws FetchError<404, types.PutV2ReservationsBookingsIdCheckinResponse404> Not Found
     * @throws FetchError<500, types.PutV2ReservationsBookingsIdCheckinResponse500> Server Error
     */
    putV2ReservationsBookingsIdCheckin(body, metadata) {
        return this.core.fetch('/v2/reservations/bookings/{id}/checkin', 'put', body, metadata);
    }
    /**
     * Checkout a booking at the specified time
     *
     * @summary Checkout a booking at the specified time
     * @throws FetchError<400, types.PutV2ReservationsBookingsIdCheckoutResponse400> Bad Request
     * @throws FetchError<401, types.PutV2ReservationsBookingsIdCheckoutResponse401> Unauthorized
     * @throws FetchError<404, types.PutV2ReservationsBookingsIdCheckoutResponse404> Not Found
     * @throws FetchError<500, types.PutV2ReservationsBookingsIdCheckoutResponse500> Server Error
     */
    putV2ReservationsBookingsIdCheckout(body, metadata) {
        return this.core.fetch('/v2/reservations/bookings/{id}/checkout', 'put', body, metadata);
    }
    /**
     * Gets a quote
     *
     * @throws FetchError<400, types.GetV2QuotePropertyidResponse400> Bad Request
     * @throws FetchError<401, types.GetV2QuotePropertyidResponse401> Unauthorized
     * @throws FetchError<404, types.GetV2QuotePropertyidResponse404> Not Found
     * @throws FetchError<500, types.GetV2QuotePropertyidResponse500> Server Error
     */
    getV2QuotePropertyid(metadata) {
        return this.core.fetch('/v2/quote/{propertyId}', 'get', metadata);
    }
    /**
     * Retrieve a message thread with the specified Id.
     *
     * @summary Get thread details
     * @throws FetchError<400, types.GetV2MessagingThreadguidResponse400> Bad Request
     * @throws FetchError<401, types.GetV2MessagingThreadguidResponse401> Unauthorized
     * @throws FetchError<404, types.GetV2MessagingThreadguidResponse404> Not Found
     * @throws FetchError<500, types.GetV2MessagingThreadguidResponse500> Server Error
     */
    getV2MessagingThreadguid(metadata) {
        return this.core.fetch('/v2/messaging/{threadGuid}', 'get', metadata);
    }
}
const createSDK = (() => { return new SDK(); })();
export default createSDK;
