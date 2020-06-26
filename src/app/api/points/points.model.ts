/**
 * Copyright (c) 2014-2020 Taiga Agile LLC
 *
 * This source code is licensed under the terms of the
 * GNU Affero General Public License found in the LICENSE file in
 * the root directory of this source tree.
 */


export interface Points {
  id: number;
  name: string;
  value: number | null;
  order: number;
  project: number;
}

export interface PointsInput {
  name: string;
  value: number | null;
  order: number;
  project: number;
}

export type PointsPartialInput = Partial<PointsInput>;

export type PointsOrderList = number[][];