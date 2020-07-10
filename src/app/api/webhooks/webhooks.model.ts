/**
 * Copyright (c) 2014-2020 Taiga Agile LLC
 *
 * This source code is licensed under the terms of the
 * GNU Affero General Public License found in the LICENSE file in
 * the root directory of this source tree.
 */

export interface WebhookDetail {
  id: number;
  project: number;
  key: string;
  logs_counter: number;
  name: string;
  url: string;
}

export type WebhookCreationData = Pick<WebhookDetail, 'project' | 'name' | 'url' | 'key'>;

export interface WebhookLog {
  errorMessage: string;
}