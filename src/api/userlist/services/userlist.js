'use strict';

/**
 * userlist service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::userlist.userlist');
