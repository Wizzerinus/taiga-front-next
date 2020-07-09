/**
 * Copyright (c) 2014-2020 Taiga Agile LLC
 *
 * This source code is licensed under the terms of the
 * GNU Affero General Public License found in the LICENSE file in
 * the root directory of this source tree.
 */

import { Userstory } from './userstories.model';

export interface UserstoryCustomAttribute {
  createdDate: string;
  description: string;
  extra: null | string;
  id: number;
  modifiedDate: string;
  name: string;
  order: number;
  project: number;
  type: string;
}

export interface UserstoryCustomAttributeCreationData {
  name: string;
  description?: string;
  order?: number;
  project: number;
}

export interface UserstoryCustomAttributeValues {
  attributesValues: Record<string, string>;
  userStory: Userstory['id'];
  version: number;
}