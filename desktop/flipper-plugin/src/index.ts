/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

export {produce, Draft} from 'immer';
import styledImport from '@emotion/styled';
export const styled = styledImport;

import './plugin/PluginBase';
import * as TestUtilites from './test-utils/test-utils';

export {
  SandyPluginInstance as _SandyPluginInstance,
  PluginClient,
} from './plugin/Plugin';
export {
  Device,
  DeviceLogEntry,
  DeviceLogListener,
  DevicePluginClient,
  LogLevel,
  SandyDevicePluginInstance as _SandyDevicePluginInstance,
  DeviceType,
} from './plugin/DevicePlugin';
export {SandyPluginDefinition as _SandyPluginDefinition} from './plugin/SandyPluginDefinition';
export {SandyPluginRenderer as _SandyPluginRenderer} from './plugin/PluginRenderer';
export {
  SandyPluginContext as _SandyPluginContext,
  usePlugin,
} from './plugin/PluginContext';
export {createState, useValue, Atom} from './state/atom';
export {batch} from './state/batch';
export {
  FlipperLib,
  getFlipperLibImplementation as _getFlipperLibImplementation,
  setFlipperLibImplementation as _setFlipperLibImplementation,
} from './plugin/FlipperLib';
export {
  MenuEntry,
  NormalizedMenuEntry,
  buildInMenuEntries as _buildInMenuEntries,
  DefaultKeyboardAction,
} from './plugin/MenuEntry';
export {Notification} from './plugin/Notification';

export {theme} from './ui/theme';
export {Layout} from './ui/Layout';
export {
  NUX,
  NuxManagerContext as _NuxManagerContext,
  createNuxManager as _createNuxManager,
} from './ui/NUX';
export {Sidebar as _Sidebar} from './ui/Sidebar';
export {DetailSidebar} from './ui/DetailSidebar';

export {renderReactRoot} from './utils/renderReactRoot';
export {
  Tracked,
  TrackingScope,
  setGlobalInteractionReporter as _setGlobalInteractionReporter,
  withTrackingScope,
  useTrackedCallback,
  wrapInteractionHandler as _wrapInteractionHandler,
} from './ui/Tracked';

export {DataFormatter} from './ui/DataFormatter';

export {sleep} from './utils/sleep';
export {
  LogTypes,
  TrackType,
  Logger,
  useLogger,
  _LoggerContext,
} from './utils/Logger';
export {Idler} from './utils/Idler';

export {createDataSource, DataSource} from './state/DataSource';

export {DataTable, DataTableColumn} from './ui/data-table/DataTable';
export {DataTableManager} from './ui/data-table/DataTableManager';

export {
  Interactive as _Interactive,
  InteractiveProps as _InteractiveProps,
} from './ui/Interactive';

export {HighlightManager} from './ui/Highlight';
export {
  DataValueExtractor,
  DataInspectorExpanded,
} from './ui/data-inspector/DataInspector';
export {
  DataDescriptionType,
  DataDescription,
} from './ui/data-inspector/DataDescription';
export {MarkerTimeline} from './ui/MarkerTimeline';
export {ManagedDataInspector as DataInspector} from './ui/data-inspector/ManagedDataInspector';

export {useMemoize} from './utils/useMemoize';

// It's not ideal that this exists in flipper-plugin sources directly,
// but is the least pain for plugin authors.
// Probably we should make sure that testing-library doesn't end up in our final Flipper bundle (which packages flipper-plugin)
// T69106962
export const TestUtils = TestUtilites;
