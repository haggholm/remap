'use strict';

var _ = require('lodash'),
	_get = _.get,
	_set = _.set;


/**
 * Remap object keys. Overwrite existing values.
 *
 * @param {Object} src
 * @param {Object.<string,string>} map {fromKey: toKey}
 * @returns {Object}
 */
exports.hard = function(src, map) {
	var dest = _.clone(src);
	_.each(map, function(to, from) {
		_set(dest, to, _get(src, from));
	});
	return dest;
};


/**
 * Remap object keys. Do not overwrite existing values.
 *
 * @param {Object} src
 * @param {Object.<string,string>} map {fromKey: toKey}
 * @returns {Object}
 */
exports.soft = function(src, map) {
	var dest = _.clone(src);
	_.each(map, function(to, from) {
		if (_get(dest, to) === undefined) {
			_set(dest, to, _get(src, from));
		}
	});
	return dest;
};
