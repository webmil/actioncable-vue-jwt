import Cable from './cable';

const ActionCableVueJWT = {
	/**
	 * ActionCableVue entry point
	 * @param Vue
	 * @param {Object} options - ActionCableVue options
	 * @param {string} options.connectionUrl - ActionCable server websocket URL
	 * @param {boolean} options.debug - Enable logging for debug
	 * @param {string} options.debugLevel - Debug level required for logging. Either `info`, `error`, or `all`
	 * @param {function} jwt - Function that can be called to retrieve the JSON Web Token for the current user
	 */
	install(Vue, options) {
		new Cable(Vue, options);
	}
};

export default ActionCableVueJWT;
