System.config({
  baseURL: "https://jspm.io",
  defaultJSExtensions: true,
  transpiler: false,

  meta: {
    "target/scala-2.11/scala-js-examples-fastopt.js": {
      "format": "cjs"
    },
    "target/scala-2.11/scala-js-examples-opt.js": {
      "format": "cjs"
    }
  },

  depCache: {
    "target/scala-2.11/scala-js-examples-fastopt.js": [
      "react",
      "react-dom"
    ],
    "target/scala-2.11/scala-js-examples-opt.js": [
      "react",
      "react-dom"
    ],
    "npm:react-dom@15.3.2.js": [
      "npm:react-dom@15.3.2/index.js"
    ],
    "npm:react@15.3.2.js": [
      "npm:react@15.3.2/react.js"
    ],
    "npm:react-dom@15.3.2/index.js": [
      "react/lib/ReactDOM"
    ],
    "npm:react@15.3.2/react.js": [
      "./lib/React"
    ],
    "npm:react@15.3.2/lib/ReactDOM.js": [
      "./ReactDOMComponentTree",
      "./ReactDefaultInjection",
      "./ReactMount",
      "./ReactReconciler",
      "./ReactUpdates",
      "./ReactVersion",
      "./findDOMNode",
      "./getHostComponentFromComposite",
      "./renderSubtreeIntoContainer",
      "fbjs/lib/warning",
      "fbjs/lib/ExecutionEnvironment",
      "./ReactInstrumentation",
      "./ReactDOMUnknownPropertyHook",
      "./ReactDOMNullInputValuePropHook",
      "process"
    ],
    "npm:react@15.3.2/lib/React.js": [
      "object-assign",
      "./ReactChildren",
      "./ReactComponent",
      "./ReactPureComponent",
      "./ReactClass",
      "./ReactDOMFactories",
      "./ReactElement",
      "./ReactPropTypes",
      "./ReactVersion",
      "./onlyChild",
      "fbjs/lib/warning",
      "./ReactElementValidator",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactDefaultInjection.js": [
      "./BeforeInputEventPlugin",
      "./ChangeEventPlugin",
      "./DefaultEventPluginOrder",
      "./EnterLeaveEventPlugin",
      "./HTMLDOMPropertyConfig",
      "./ReactComponentBrowserEnvironment",
      "./ReactDOMComponent",
      "./ReactDOMComponentTree",
      "./ReactDOMEmptyComponent",
      "./ReactDOMTreeTraversal",
      "./ReactDOMTextComponent",
      "./ReactDefaultBatchingStrategy",
      "./ReactEventListener",
      "./ReactInjection",
      "./ReactReconcileTransaction",
      "./SVGDOMPropertyConfig",
      "./SelectEventPlugin",
      "./SimpleEventPlugin"
    ],
    "npm:react@15.3.2/lib/ReactReconciler.js": [
      "./ReactRef",
      "./ReactInstrumentation",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactMount.js": [
      "./reactProdInvariant",
      "./DOMLazyTree",
      "./DOMProperty",
      "./ReactBrowserEventEmitter",
      "./ReactCurrentOwner",
      "./ReactDOMComponentTree",
      "./ReactDOMContainerInfo",
      "./ReactDOMFeatureFlags",
      "./ReactElement",
      "./ReactFeatureFlags",
      "./ReactInstanceMap",
      "./ReactInstrumentation",
      "./ReactMarkupChecksum",
      "./ReactReconciler",
      "./ReactUpdateQueue",
      "./ReactUpdates",
      "fbjs/lib/emptyObject",
      "./instantiateReactComponent",
      "fbjs/lib/invariant",
      "./setInnerHTML",
      "./shouldUpdateReactComponent",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/renderSubtreeIntoContainer.js": [
      "./ReactMount"
    ],
    "npm:react@15.3.2/lib/getHostComponentFromComposite.js": [
      "./ReactNodeTypes"
    ],
    "github:jspm/nodelibs-process@0.1.2.js": [
      "github:jspm/nodelibs-process@0.1.2/index"
    ],
    "npm:fbjs@0.8.5/lib/warning.js": [
      "./emptyFunction",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactInstrumentation.js": [
      "./ReactDebugTool",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactUpdates.js": [
      "./reactProdInvariant",
      "object-assign",
      "./CallbackQueue",
      "./PooledClass",
      "./ReactFeatureFlags",
      "./ReactReconciler",
      "./Transaction",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactDOMComponentTree.js": [
      "./reactProdInvariant",
      "./DOMProperty",
      "./ReactDOMComponentFlags",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/findDOMNode.js": [
      "./reactProdInvariant",
      "./ReactCurrentOwner",
      "./ReactDOMComponentTree",
      "./ReactInstanceMap",
      "./getHostComponentFromComposite",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactDOMUnknownPropertyHook.js": [
      "./DOMProperty",
      "./EventPluginRegistry",
      "./ReactComponentTreeHook",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactDOMNullInputValuePropHook.js": [
      "./ReactComponentTreeHook",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:object-assign@4.1.0.js": [
      "npm:object-assign@4.1.0/index"
    ],
    "npm:react@15.3.2/lib/ReactDOMFactories.js": [
      "./ReactElement",
      "./ReactElementValidator",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactChildren.js": [
      "./PooledClass",
      "./ReactElement",
      "fbjs/lib/emptyFunction",
      "./traverseAllChildren"
    ],
    "npm:react@15.3.2/lib/ReactComponent.js": [
      "./reactProdInvariant",
      "./ReactNoopUpdateQueue",
      "./canDefineProperty",
      "fbjs/lib/emptyObject",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactPureComponent.js": [
      "object-assign",
      "./ReactComponent",
      "./ReactNoopUpdateQueue",
      "fbjs/lib/emptyObject"
    ],
    "npm:react@15.3.2/lib/ReactClass.js": [
      "./reactProdInvariant",
      "object-assign",
      "./ReactComponent",
      "./ReactElement",
      "./ReactPropTypeLocations",
      "./ReactPropTypeLocationNames",
      "./ReactNoopUpdateQueue",
      "fbjs/lib/emptyObject",
      "fbjs/lib/invariant",
      "fbjs/lib/keyMirror",
      "fbjs/lib/keyOf",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactElement.js": [
      "object-assign",
      "./ReactCurrentOwner",
      "fbjs/lib/warning",
      "./canDefineProperty",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactPropTypes.js": [
      "./ReactElement",
      "./ReactPropTypeLocationNames",
      "./ReactPropTypesSecret",
      "fbjs/lib/emptyFunction",
      "./getIteratorFn",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/onlyChild.js": [
      "./reactProdInvariant",
      "./ReactElement",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactElementValidator.js": [
      "./ReactCurrentOwner",
      "./ReactComponentTreeHook",
      "./ReactElement",
      "./ReactPropTypeLocations",
      "./checkReactTypeSpec",
      "./canDefineProperty",
      "./getIteratorFn",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/HTMLDOMPropertyConfig.js": [
      "./DOMProperty"
    ],
    "npm:react@15.3.2/lib/ReactInjection.js": [
      "./DOMProperty",
      "./EventPluginHub",
      "./EventPluginUtils",
      "./ReactComponentEnvironment",
      "./ReactClass",
      "./ReactEmptyComponent",
      "./ReactBrowserEventEmitter",
      "./ReactHostComponent",
      "./ReactUpdates"
    ],
    "npm:react@15.3.2/lib/DOMLazyTree.js": [
      "./DOMNamespaces",
      "./setInnerHTML",
      "./createMicrosoftUnsafeLocalFunction",
      "./setTextContent"
    ],
    "npm:react@15.3.2/lib/ReactMarkupChecksum.js": [
      "./adler32"
    ],
    "npm:react@15.3.2/lib/ReactDOMEmptyComponent.js": [
      "object-assign",
      "./DOMLazyTree",
      "./ReactDOMComponentTree"
    ],
    "npm:react@15.3.2/lib/ReactComponentBrowserEnvironment.js": [
      "./DOMChildrenOperations",
      "./ReactDOMIDOperations",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactReconcileTransaction.js": [
      "object-assign",
      "./CallbackQueue",
      "./PooledClass",
      "./ReactBrowserEventEmitter",
      "./ReactInputSelection",
      "./ReactInstrumentation",
      "./Transaction",
      "./ReactUpdateQueue",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactRef.js": [
      "./ReactOwner",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactBrowserEventEmitter.js": [
      "object-assign",
      "./EventConstants",
      "./EventPluginRegistry",
      "./ReactEventEmitterMixin",
      "./ViewportMetrics",
      "./getVendorPrefixedEventName",
      "./isEventSupported",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactDOMContainerInfo.js": [
      "./validateDOMNesting",
      "process"
    ],
    "npm:fbjs@0.8.5/lib/emptyObject.js": [
      "process"
    ],
    "npm:fbjs@0.8.5/lib/invariant.js": [
      "process"
    ],
    "npm:react@15.3.2/lib/BeforeInputEventPlugin.js": [
      "./EventConstants",
      "./EventPropagators",
      "fbjs/lib/ExecutionEnvironment",
      "./FallbackCompositionState",
      "./SyntheticCompositionEvent",
      "./SyntheticInputEvent",
      "fbjs/lib/keyOf"
    ],
    "npm:react@15.3.2/lib/DefaultEventPluginOrder.js": [
      "fbjs/lib/keyOf"
    ],
    "npm:react@15.3.2/lib/EnterLeaveEventPlugin.js": [
      "./EventConstants",
      "./EventPropagators",
      "./ReactDOMComponentTree",
      "./SyntheticMouseEvent",
      "fbjs/lib/keyOf"
    ],
    "npm:react@15.3.2/lib/ChangeEventPlugin.js": [
      "./EventConstants",
      "./EventPluginHub",
      "./EventPropagators",
      "fbjs/lib/ExecutionEnvironment",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "./SyntheticEvent",
      "./getEventTarget",
      "./isEventSupported",
      "./isTextInputElement",
      "fbjs/lib/keyOf",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactDOMComponent.js": [
      "./reactProdInvariant",
      "object-assign",
      "./AutoFocusUtils",
      "./CSSPropertyOperations",
      "./DOMLazyTree",
      "./DOMNamespaces",
      "./DOMProperty",
      "./DOMPropertyOperations",
      "./EventConstants",
      "./EventPluginHub",
      "./EventPluginRegistry",
      "./ReactBrowserEventEmitter",
      "./ReactDOMButton",
      "./ReactDOMComponentFlags",
      "./ReactDOMComponentTree",
      "./ReactDOMInput",
      "./ReactDOMOption",
      "./ReactDOMSelect",
      "./ReactDOMTextarea",
      "./ReactInstrumentation",
      "./ReactMultiChild",
      "./ReactServerRenderingTransaction",
      "fbjs/lib/emptyFunction",
      "./escapeTextContentForBrowser",
      "fbjs/lib/invariant",
      "./isEventSupported",
      "fbjs/lib/keyOf",
      "fbjs/lib/shallowEqual",
      "./validateDOMNesting",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactDOMTreeTraversal.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactDOMTextComponent.js": [
      "./reactProdInvariant",
      "object-assign",
      "./DOMChildrenOperations",
      "./DOMLazyTree",
      "./ReactDOMComponentTree",
      "./escapeTextContentForBrowser",
      "fbjs/lib/invariant",
      "./validateDOMNesting",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactDefaultBatchingStrategy.js": [
      "object-assign",
      "./ReactUpdates",
      "./Transaction",
      "fbjs/lib/emptyFunction"
    ],
    "npm:react@15.3.2/lib/ReactEventListener.js": [
      "object-assign",
      "fbjs/lib/EventListener",
      "fbjs/lib/ExecutionEnvironment",
      "./PooledClass",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "./getEventTarget",
      "fbjs/lib/getUnboundedScrollPosition",
      "process"
    ],
    "npm:react@15.3.2/lib/SelectEventPlugin.js": [
      "./EventConstants",
      "./EventPropagators",
      "fbjs/lib/ExecutionEnvironment",
      "./ReactDOMComponentTree",
      "./ReactInputSelection",
      "./SyntheticEvent",
      "fbjs/lib/getActiveElement",
      "./isTextInputElement",
      "fbjs/lib/keyOf",
      "fbjs/lib/shallowEqual"
    ],
    "npm:react@15.3.2/lib/SimpleEventPlugin.js": [
      "./reactProdInvariant",
      "./EventConstants",
      "fbjs/lib/EventListener",
      "./EventPropagators",
      "./ReactDOMComponentTree",
      "./SyntheticAnimationEvent",
      "./SyntheticClipboardEvent",
      "./SyntheticEvent",
      "./SyntheticFocusEvent",
      "./SyntheticKeyboardEvent",
      "./SyntheticMouseEvent",
      "./SyntheticDragEvent",
      "./SyntheticTouchEvent",
      "./SyntheticTransitionEvent",
      "./SyntheticUIEvent",
      "./SyntheticWheelEvent",
      "fbjs/lib/emptyFunction",
      "./getEventCharCode",
      "fbjs/lib/invariant",
      "fbjs/lib/keyOf",
      "process"
    ],
    "npm:react@15.3.2/lib/DOMProperty.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactUpdateQueue.js": [
      "./reactProdInvariant",
      "./ReactCurrentOwner",
      "./ReactInstanceMap",
      "./ReactInstrumentation",
      "./ReactUpdates",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/instantiateReactComponent.js": [
      "./reactProdInvariant",
      "object-assign",
      "./ReactCompositeComponent",
      "./ReactEmptyComponent",
      "./ReactHostComponent",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/setInnerHTML.js": [
      "fbjs/lib/ExecutionEnvironment",
      "./DOMNamespaces",
      "./createMicrosoftUnsafeLocalFunction",
      "process"
    ],
    "github:jspm/nodelibs-process@0.1.2/index.js": [
      "process"
    ],
    "npm:react@15.3.2/lib/ReactNodeTypes.js": [
      "./reactProdInvariant",
      "./ReactElement",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactDebugTool.js": [
      "./ReactInvalidSetStateWarningHook",
      "./ReactHostOperationHistoryHook",
      "./ReactComponentTreeHook",
      "./ReactChildrenMutationWarningHook",
      "fbjs/lib/ExecutionEnvironment",
      "fbjs/lib/performanceNow",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/CallbackQueue.js": [
      "./reactProdInvariant",
      "object-assign",
      "./PooledClass",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/Transaction.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/PooledClass.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/EventPluginRegistry.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactComponentTreeHook.js": [
      "./reactProdInvariant",
      "./ReactCurrentOwner",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/canDefineProperty.js": [
      "process"
    ],
    "npm:react@15.3.2/lib/ReactPropTypeLocationNames.js": [
      "process"
    ],
    "npm:fbjs@0.8.5/lib/keyMirror.js": [
      "./invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/traverseAllChildren.js": [
      "./reactProdInvariant",
      "./ReactCurrentOwner",
      "./ReactElement",
      "./getIteratorFn",
      "fbjs/lib/invariant",
      "./KeyEscapeUtils",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactNoopUpdateQueue.js": [
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactPropTypeLocations.js": [
      "fbjs/lib/keyMirror"
    ],
    "npm:react@15.3.2/lib/checkReactTypeSpec.js": [
      "./reactProdInvariant",
      "./ReactPropTypeLocationNames",
      "./ReactPropTypesSecret",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "./ReactComponentTreeHook",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactEventEmitterMixin.js": [
      "./EventPluginHub"
    ],
    "npm:react@15.3.2/lib/SyntheticCompositionEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react@15.3.2/lib/SyntheticInputEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react@15.3.2/lib/SyntheticMouseEvent.js": [
      "./SyntheticUIEvent",
      "./ViewportMetrics",
      "./getEventModifierState"
    ],
    "npm:react@15.3.2/lib/ReactDOMButton.js": [
      "./DisabledInputUtils"
    ],
    "npm:react@15.3.2/lib/SyntheticAnimationEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react@15.3.2/lib/SyntheticClipboardEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react@15.3.2/lib/SyntheticFocusEvent.js": [
      "./SyntheticUIEvent"
    ],
    "npm:react@15.3.2/lib/SyntheticKeyboardEvent.js": [
      "./SyntheticUIEvent",
      "./getEventCharCode",
      "./getEventKey",
      "./getEventModifierState"
    ],
    "npm:react@15.3.2/lib/SyntheticDragEvent.js": [
      "./SyntheticMouseEvent"
    ],
    "npm:react@15.3.2/lib/SyntheticTouchEvent.js": [
      "./SyntheticUIEvent",
      "./getEventModifierState"
    ],
    "npm:react@15.3.2/lib/SyntheticTransitionEvent.js": [
      "./SyntheticEvent"
    ],
    "npm:react@15.3.2/lib/SyntheticUIEvent.js": [
      "./SyntheticEvent",
      "./getEventTarget"
    ],
    "npm:react@15.3.2/lib/SyntheticWheelEvent.js": [
      "./SyntheticMouseEvent"
    ],
    "npm:react@15.3.2/lib/FallbackCompositionState.js": [
      "object-assign",
      "./PooledClass",
      "./getTextContentAccessor"
    ],
    "npm:react@15.3.2/lib/DOMChildrenOperations.js": [
      "./DOMLazyTree",
      "./Danger",
      "./ReactMultiChildUpdateTypes",
      "./ReactDOMComponentTree",
      "./ReactInstrumentation",
      "./createMicrosoftUnsafeLocalFunction",
      "./setInnerHTML",
      "./setTextContent",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactDOMIDOperations.js": [
      "./DOMChildrenOperations",
      "./ReactDOMComponentTree",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactServerRenderingTransaction.js": [
      "object-assign",
      "./PooledClass",
      "./Transaction",
      "./ReactInstrumentation",
      "./ReactServerUpdateQueue",
      "process"
    ],
    "npm:fbjs@0.8.5/lib/EventListener.js": [
      "./emptyFunction",
      "process"
    ],
    "npm:react@15.3.2/lib/EventPluginHub.js": [
      "./reactProdInvariant",
      "./EventPluginRegistry",
      "./EventPluginUtils",
      "./ReactErrorUtils",
      "./accumulateInto",
      "./forEachAccumulated",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactComponentEnvironment.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/EventPluginUtils.js": [
      "./reactProdInvariant",
      "./EventConstants",
      "./ReactErrorUtils",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactHostComponent.js": [
      "./reactProdInvariant",
      "object-assign",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/setTextContent.js": [
      "fbjs/lib/ExecutionEnvironment",
      "./escapeTextContentForBrowser",
      "./setInnerHTML"
    ],
    "npm:react@15.3.2/lib/ReactInputSelection.js": [
      "./ReactDOMSelection",
      "fbjs/lib/containsNode",
      "fbjs/lib/focusNode",
      "fbjs/lib/getActiveElement"
    ],
    "npm:react@15.3.2/lib/ReactOwner.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/EventConstants.js": [
      "fbjs/lib/keyMirror"
    ],
    "npm:react@15.3.2/lib/getVendorPrefixedEventName.js": [
      "fbjs/lib/ExecutionEnvironment"
    ],
    "npm:react@15.3.2/lib/isEventSupported.js": [
      "fbjs/lib/ExecutionEnvironment"
    ],
    "npm:react@15.3.2/lib/EventPropagators.js": [
      "./EventConstants",
      "./EventPluginHub",
      "./EventPluginUtils",
      "./accumulateInto",
      "./forEachAccumulated",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/validateDOMNesting.js": [
      "object-assign",
      "fbjs/lib/emptyFunction",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/SyntheticEvent.js": [
      "object-assign",
      "./PooledClass",
      "fbjs/lib/emptyFunction",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/AutoFocusUtils.js": [
      "./ReactDOMComponentTree",
      "fbjs/lib/focusNode"
    ],
    "npm:react@15.3.2/lib/CSSPropertyOperations.js": [
      "./CSSProperty",
      "fbjs/lib/ExecutionEnvironment",
      "./ReactInstrumentation",
      "fbjs/lib/camelizeStyleName",
      "./dangerousStyleValue",
      "fbjs/lib/hyphenateStyleName",
      "fbjs/lib/memoizeStringOnly",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/DOMPropertyOperations.js": [
      "./DOMProperty",
      "./ReactDOMComponentTree",
      "./ReactInstrumentation",
      "./quoteAttributeValueForBrowser",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactDOMInput.js": [
      "./reactProdInvariant",
      "object-assign",
      "./DisabledInputUtils",
      "./DOMPropertyOperations",
      "./LinkedValueUtils",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactDOMOption.js": [
      "object-assign",
      "./ReactChildren",
      "./ReactDOMComponentTree",
      "./ReactDOMSelect",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactDOMSelect.js": [
      "object-assign",
      "./DisabledInputUtils",
      "./LinkedValueUtils",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactDOMTextarea.js": [
      "./reactProdInvariant",
      "object-assign",
      "./DisabledInputUtils",
      "./LinkedValueUtils",
      "./ReactDOMComponentTree",
      "./ReactUpdates",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactMultiChild.js": [
      "./reactProdInvariant",
      "./ReactComponentEnvironment",
      "./ReactInstanceMap",
      "./ReactInstrumentation",
      "./ReactMultiChildUpdateTypes",
      "./ReactCurrentOwner",
      "./ReactReconciler",
      "./ReactChildReconciler",
      "fbjs/lib/emptyFunction",
      "./flattenChildren",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactCompositeComponent.js": [
      "./reactProdInvariant",
      "object-assign",
      "./ReactComponentEnvironment",
      "./ReactCurrentOwner",
      "./ReactElement",
      "./ReactErrorUtils",
      "./ReactInstanceMap",
      "./ReactInstrumentation",
      "./ReactNodeTypes",
      "./ReactPropTypeLocations",
      "./ReactReconciler",
      "./checkReactTypeSpec",
      "fbjs/lib/emptyObject",
      "fbjs/lib/invariant",
      "fbjs/lib/shallowEqual",
      "./shouldUpdateReactComponent",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:process@0.11.9.js": [
      "npm:process@0.11.9/browser.js"
    ],
    "npm:fbjs@0.8.5/lib/performanceNow.js": [
      "./performance"
    ],
    "npm:react@15.3.2/lib/ReactInvalidSetStateWarningHook.js": [
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactChildrenMutationWarningHook.js": [
      "./ReactComponentTreeHook",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/getEventKey.js": [
      "./getEventCharCode"
    ],
    "npm:fbjs@0.8.5/lib/containsNode.js": [
      "./isTextNode"
    ],
    "npm:fbjs@0.8.5/lib/camelizeStyleName.js": [
      "./camelize"
    ],
    "npm:fbjs@0.8.5/lib/hyphenateStyleName.js": [
      "./hyphenate"
    ],
    "npm:react@15.3.2/lib/ReactErrorUtils.js": [
      "process"
    ],
    "npm:react@15.3.2/lib/getTextContentAccessor.js": [
      "fbjs/lib/ExecutionEnvironment"
    ],
    "npm:react@15.3.2/lib/Danger.js": [
      "./reactProdInvariant",
      "./DOMLazyTree",
      "fbjs/lib/ExecutionEnvironment",
      "fbjs/lib/createNodesFromMarkup",
      "fbjs/lib/emptyFunction",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactMultiChildUpdateTypes.js": [
      "fbjs/lib/keyMirror"
    ],
    "npm:react@15.3.2/lib/ReactServerUpdateQueue.js": [
      "./ReactUpdateQueue",
      "./Transaction",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/accumulateInto.js": [
      "./reactProdInvariant",
      "fbjs/lib/invariant",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactDOMSelection.js": [
      "fbjs/lib/ExecutionEnvironment",
      "./getNodeForCharacterOffset",
      "./getTextContentAccessor"
    ],
    "npm:react@15.3.2/lib/dangerousStyleValue.js": [
      "./CSSProperty",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/quoteAttributeValueForBrowser.js": [
      "./escapeTextContentForBrowser"
    ],
    "npm:react@15.3.2/lib/LinkedValueUtils.js": [
      "./reactProdInvariant",
      "./ReactPropTypes",
      "./ReactPropTypeLocations",
      "./ReactPropTypesSecret",
      "fbjs/lib/invariant",
      "fbjs/lib/warning",
      "process"
    ],
    "npm:react@15.3.2/lib/ReactChildReconciler.js": [
      "./ReactReconciler",
      "./instantiateReactComponent",
      "./KeyEscapeUtils",
      "./shouldUpdateReactComponent",
      "./traverseAllChildren",
      "fbjs/lib/warning",
      "./ReactComponentTreeHook",
      "process"
    ],
    "npm:react@15.3.2/lib/flattenChildren.js": [
      "./KeyEscapeUtils",
      "./traverseAllChildren",
      "fbjs/lib/warning",
      "./ReactComponentTreeHook",
      "process"
    ],
    "npm:fbjs@0.8.5/lib/performance.js": [
      "./ExecutionEnvironment"
    ],
    "npm:fbjs@0.8.5/lib/isTextNode.js": [
      "./isNode"
    ],
    "npm:fbjs@0.8.5/lib/createNodesFromMarkup.js": [
      "./ExecutionEnvironment",
      "./createArrayFromMixed",
      "./getMarkupWrap",
      "./invariant",
      "process"
    ],
    "npm:fbjs@0.8.5/lib/createArrayFromMixed.js": [
      "./invariant",
      "process"
    ],
    "npm:fbjs@0.8.5/lib/getMarkupWrap.js": [
      "./ExecutionEnvironment",
      "./invariant",
      "process"
    ]
  },

  map: {
    "react": "npm:react@15.3.2",
    "react-dom": "npm:react-dom@15.3.2",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.7"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:asap@2.0.5": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.9",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.1.5",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-shims@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:encoding@0.1.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.13"
    },
    "npm:fbjs@0.8.5": {
      "core-js": "npm:core-js@1.2.7",
      "immutable": "npm:immutable@3.8.1",
      "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
      "loose-envify": "npm:loose-envify@1.2.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.1.1",
      "ua-parser-js": "npm:ua-parser-js@0.7.10"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:isomorphic-fetch@2.2.1": {
      "node-fetch": "npm:node-fetch@1.6.3",
      "whatwg-fetch": "npm:whatwg-fetch@1.0.0"
    },
    "npm:loose-envify@1.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@1.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:node-fetch@1.6.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "encoding": "npm:encoding@0.1.12",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-stream": "npm:is-stream@1.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:pako@0.2.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:promise@7.1.1": {
      "asap": "npm:asap@2.0.5",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-dom@15.3.2": {
      "react": "npm:react@15.3.2"
    },
    "npm:react@15.3.2": {
      "fbjs": "npm:fbjs@0.8.5",
      "loose-envify": "npm:loose-envify@1.2.0",
      "object-assign": "npm:object-assign@4.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.1.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-shims": "npm:buffer-shims@1.0.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:ua-parser-js@0.7.10": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
