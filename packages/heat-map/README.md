# @visa/heat-map

![An image depicting an example of the default heat-map component](./docs/heat-map-1.png 'Example image of a heat map')
<br>

```js
<heat-map
  accessibility = {...}
  data = {[{"date":"2016-01-01T00:00:00.000Z","category":"Restaurant","value":120,"count":420},{data}]}
  valueAccessor = {"value"}
  xAccessor = {"date"}
  yAccessor = {"category"}
/>
```

<br>

<details open="open">
  <summary>Jump To:</summary>
  <ol>
    <li>
      <a href="#installation-steps">Installation Steps</a>
    </li>
    <li>
      <a href="#props-documentation">Props Documentation</a>
      <ul>
        <li><a href="#base-props">Base Props </a></li>
        <li><a href="#data-props">Data Props</a></li>
        <li><a href="#accessibility-props">Accessibility Props</a></li>
        <li><a href="#localization-props">Localization Props</a></li>
        <li><a href="#annotation-props">Annotation Props</a></li>
        <li><a href="#axis-props">Axis Props</a></li>
        <li><a href="#event-props">Event Props</a></li>
        <li><a href="#label-props">Label Props</a></li>
        <li><a href="#margin-and-padding-props">Margin & Padding Props</a></li>
        <li><a href="#style-props">Style Props</a></li>
      </ul>
    </li>
  </ol>
</details>
<br>

## <a name="installation-steps">#</a> Installation Steps

---

- Using npm

  ```
  $ npm i @visa/heat-map
  ```

- Using yarn
  ```
  $ yarn add @visa/heat-map
  ```

<br>

## <a name="props-documentation">#</a> Props Documentation

---

<br>

### <a name="base-props" href="#base-props">#</a> Base Props [<>](./src/components/heat-map/heat-map.tsx 'Source')

| Name                  | Type                                               | Default Value(s)     | Description                                                                                                                                        |
| --------------------- | -------------------------------------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `height`              | number                                             | 250                  | Height in px of the chart container                                                                                                                |
| `width`               | number                                             | 500                  | Width in px of the chart container                                                                                                                 |
| `mainTitle`           | string                                             | 'Heat Map Title'     | The `dynamic` tag of title for the chart (or you can create your own separately). See `highestHeadingLevel` prop for how tags get assigned.        |
| `subTitle`            | string/[ISubTitleType](../types/src/prop-types.ts) | 'This is a subtitle' | The `dynamic` tag for a sub title for the chart (or you can create your own separately). See `highestHeadingLevel` prop for how tags get assigned. |
| `highestHeadingLevel` | string/number                                      | 'h2'                 | Sets the heading level (which also sets sublevels) for the chart. "p", "span", and "div" are also valid.                                           |

<br>

### ISubTitleType Definition

| Name                | Type                                                   | Default Value(s) | Description                                                                                                                                                                                                        |
| ------------------- | ------------------------------------------------------ | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `text`              | string                                                 | ‘’               | Text of the subtitle.                                                                                                                                                                                              |
| `keywordsHighlight` | [IKeywordsHighlightType](../types/src/prop-types.ts)[] | ''               | Configuration used to create highlighted words in the subtitle, an array of objects which includes `text`, `mode`, `color` and `index` keys. See `IKeywordsHighlightType` definition below for additional details. |

<br>
<br>

### IKeywordsHighlightType Definition

| Name (keywordsHighlight.) | Type                   | Default Value(s) | Description                                                                                                                                                                                                                |
| ------------------------- | ---------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`                    | string                 | ''               | A string of one or multiple words in the subtitle text to be given the highlight treatment                                                                                                                                 |
| `color`                   | string                 | ''               | HEX code color string to apply to the highlight treatment.                                                                                                                                                                 |
| `mode`                    | 'text' or 'background' | 'background'     | 'text' will highlight the text itself with the provided color, using `ensureTextContrast` utility to ensure text contrast. 'background' will highlight the background-color of the created `span` with the provided color. |
| `index`                   | number                 |                  | If provided, highlight treatment is provided to the specific instance of the text within the sub-title. Otherwise, all instances of the provided string will be given highlight treatment.                                 |

<br>
<br>

### <a name="data-props" href="#data-props">#</a> Data Props [<>](./src/components/heat-map/heat-map.tsx 'Source')

| Name            | Type     | Default Value(s) | Description                                                                                                          |
| --------------- | -------- | ---------------- | -------------------------------------------------------------------------------------------------------------------- |
| `xAccessor`     | string   | 'date'           | Key used to determine the x-axis categorical value.                                                                  |
| `yAccessor`     | string   | 'category'       | Key used to determine the y-axis categorical value.                                                                  |
| `valueAccessor` | string   | 'value'          | Key used to determine heatmap's numeric property, for assigning color.                                               |
| `uniqueID`      | string   | `undefined`      | ID used to identify chart (must be unique per chart), helpful for validation messages. Defaults to UUID v4 standard. |
| `data`          | object[] | `undefined`      | Data used to create chart, an array of objects which includes keys that map to above accessors.                      |
| `xKeyOrder`     | string[] | `undefined`      | Determines the order of x-axis categorical values.                                                                   |
| `yKeyOrder`     | string[] | `undefined`      | Determines the order of y-axis categorical values.                                                                   |

<br>
<br>

### <a name="accessibility-props" href="#accessibility-props">#</a> Accessibility Props [<>](./src/components/heat-map/heat-map.tsx 'Source')

| Name            | Type                 | Default Value(s)                                 | Description                                                                           |
| --------------- | -------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------- |
| `accessibility` | object (custom type) | [IAccessibilityType](../types/src/prop-types.ts) | Manages messages and settings for chart accessibility, _see object definition below_. |

<br>

#### IAccessibilityType Definition

| Name (accessibility.)        | Type                                     | Default Value(s)      | Description                                                                                                                                                                                                                |
| ---------------------------- | ---------------------------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `longDescription`            | string                                   | ''                    | Use this to add a helpful description of the chart.                                                                                                                                                                        |
| `executiveSummary`           | string                                   | ''                    | Use this to describe the biggest takeaway of the chart.                                                                                                                                                                    |
| `purpose`                    | string                                   | ''                    | Use this to describe the purpose of this particular chart.                                                                                                                                                                 |
| `contextExplanation`         | string                                   | ''                    | Use this to explain any controls or content on your page that affect or are affected by this chart.                                                                                                                        |
| `title`                      | string                                   | ''                    | Gives the chart an alternate title to be used by screen readers.                                                                                                                                                           |
| `elementDescriptionAccessor` | string                                   | ''                    | Optional key used to add an additional description to any element, from your data.                                                                                                                                         |
| `statisticalNotes`           | string                                   | ''                    | Use this to provide any statistical explanations, such as trends, clusters, patterns, or outliers.                                                                                                                         |
| `structureNotes`             | string                                   | ''                    | Use this to describe special visual features of the chart, such as sorting, color grouping, etc.                                                                                                                           |
| `includeDataKeyNames`        | boolean                                  | false                 | If true, includes data key names in voice over description of each element. EG "Year over year growth: 5.6%" instead of just "5.6%"                                                                                        |
| `hideDataTableButton`        | boolean                                  | false                 | If true, hides the data table button (but it is still available to screen reader users).                                                                                                                                   |
| `disableValidation`          | boolean                                  | false                 | If true, disables validations of accessibility props for this chart. Validation is intended to be used during development; upon completion, validation should be disabled.                                                 |
| `elementsAreInterface`       | any/boolean                              | null                  | Defaults to null. Set to true if interacting with the elements in this chart affects your application. Otherwise, must be set to false.                                                                                    |
| `onChangeFunc`               | function                                 | `undefined`           | Custom event listener (changeFunc) that enables dev to control accessibility page experience when chart data updates.                                                                                                      |
| `showSmallLabels`            | boolean                                  | false                 | Defaults to false. Set to true if you would like to display labels on small elements that are likely to overlap. Note, this could impact accessibility of your graphic.                                                    |
| `hideStrokes`                | boolean                                  | false                 | Defaults to false. Set to true if you would like to remove automated stroke outlines from the chart, note, this could impact accessibility of your graphic.                                                                |
| `hideTextures`               | boolean                                  | false                 | Defaults to false. Set to true if you would like to remove textures from the chart, note, this could impact accessibility of your graphic.                                                                                 |
| `keyboardNavConfig`          | [IKeyConfig](../types/src/prop-types.ts) | `{ disabled: false }` | Defaults disabled to false. May be set to true if `accessibility.elementsAreInterface = false` and `suppressEvents = true`. This will disable keyboard navigation and simplify chart instructions for screen reader users. |
| `showExperimentalTextures`   | boolean                                  | false                 | Defaults to false. Set to true if you would like leverage our textures which are still undergoing research and development.                                                                                                |

<br>

```js
// accessibility = { ...accessibility, onChangeFunc: d => changeHandler(d)}
// example of setting updates on page based on changeFunc custom events
const changeHandler = d => {
  if (d.updated && (d.removed || d.added)) {
    let updates = 'The heat map has ';
    if (d.removed) {
      updates += 'removed ' + d.removed + ' grid element' + (d.removed > 1 ? 's ' : ' ');
    }
    if (d.added) {
      updates +=
        (d.removed ? 'and ' : '') +
        'added ' +
        d.added +
        (d.removed ? '' : d.added > 1 ? ' grid elements' : ' grid element');
    }
    setChartUpdates(updates);
  } else if (d.updated) {
    const newUpdate = "The chart's data has changed, but no grid elements were removed or added.";
    setChartUpdates(
      newUpdate !== chartUpdates
        ? newUpdate
        : "The chart's data has changed again, but no grid elements were removed or added."
    );
  }
};
```

<br>
<br>

## <a name="localization-props" href="#localization-props">#</a> Localization Props [<>](./src/components/bar-chart/bar-chart.tsx 'Source')

| Name           | Type                 | Default Value(s)                                | Description                                                                          |
| -------------- | -------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------ |
| `localization` | object (custom type) | [ILocalizationType](../types/src/prop-types.ts) | Manages messages and settings for chart localization, _see object definition below_. |

<br>

### ILocalizationType Definition

| Name (localization.) | Type          | Default Value(s) | Description                                                                                                                                                               |
| -------------------- | ------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `language`           | string/object | en               | Use this to add a language to a chart. This can be string value like `en` or valid translation object.                                                                    |
| `numeralLocale`      | string/object | US               | Use this to add a numerical locale to a chart. This can be string value like `US` or valid numeralLocale object.                                                          |
| `overwrite`          | boolean       | false            | Use this to describe the purpose of this particular chart.                                                                                                                |
| `skipValidation`     | boolean       | false            | If true, disables validations of localization props for this chart. Validation is intended to be used during development; upon completion, validation should be disabled. |

<br>
<br>

### <a name="annotation-props" href="#annotation-props">#</a> Annotation Props [<>](./src/components/heat-map/heat-map.tsx 'Source')

| Name          | Type                 | Default Value(s) | Description                                                                                             |
| ------------- | -------------------- | ---------------- | ------------------------------------------------------------------------------------------------------- |
| `annotations` | array[{annotations}] | []               | Adds annotations to the chart, see [d3-svg-annotation](https://d3-annotation.susielu.com/) by Susie Lu. |

<br>

#### annotations object definition

`annotations` is an array of objects which needs to have the following properties within them. See the detailed api specifications from [d3-svg-annotation](https://d3-annotation.susielu.com/#api), along with additional properties layered on top of that work, documented below.

| Name                       | Type   | Default Value(s) | Description                                                                    |
| -------------------------- | ------ | ---------------- | ------------------------------------------------------------------------------ |
| `accessibilityDescription` | string | `undefined`      | Sets the accessibility description for the annotation for screen reader users. |

<br>
<br>

### <a name="axis-props" href="#axis-props">#</a> Axis Props [<>](./src/components/heat-map/heat-map.tsx 'Source')

| Name               | Type                 | Default Value(s)                        | Description                                                             |
| ------------------ | -------------------- | --------------------------------------- | ----------------------------------------------------------------------- |
| `xAxis`            | object (custom type) | [IAxisType](../types/src/prop-types.ts) | Manages settings for the chart's x axis, _see object definition below_. |
| `yAxis`            | object (custom type) | [IAxisType](../types/src/prop-types.ts) | Manages settings for the chart's y axis, _see object definition below_. |
| `minValueOverride` | number               | `undefined`                             | Overrides the calculated default min value.                             |
| `maxValueOverride` | number               | `undefined`                             | Overrides the calculated default max value.                             |
| `hideAxisPath`     | boolean              | false                                   | Controls the visibility axis path.                                      |
| `wrapLabel`        | boolean              | true                                    | When selected, wraps axis labels.                                       |

<br>

#### IAxisType Definition

| Name (xAxis./yAxis.) | Type    | Default Value(s)               | Description                                                                                                                                            |
| -------------------- | ------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `visible`            | boolean | true                           | Toggles the visibility of the axis.                                                                                                                    |
| `gridVisible`        | boolean | true                           | Toggles the visibility of the axis grid.                                                                                                               |
| `label`              | string  | 'X Axis'                       | Sets the label for the axis.                                                                                                                           |
| `format`             | string  | '' or '%b %y' or '0[.][0][0]a' | Sets the formatting for axis elements, EG %b, refer to [d3-time-format](https://github.com/d3/d3-time-format) and [numeral.js](http://numeraljs.com/). |
| `tickInterval`       | number  | 1                              | Can be used to reduce the frequency of axis ticks. This number sets the interval of axis ticks that are shown.                                         |

<br>
<br>

### <a name="event-props" href="#event-props">#</a> Event Props [<>](./src/components/heat-map/heat-map.tsx 'Source')

[Events in stencil.js](https://stenciljs.com/docs/events) dispatch [Custom DOM events](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events) for other components to handle, we use Stencil's @Event() decorator to emit events (click, hover, mouseOut) from end user activity on our charts.

| Name                    | Type                 | Default Value(s)                              | Description                                                                                                                                                                                                                                                                                                                     |
| ----------------------- | -------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `suppressEvents`        | boolean              | false                                         | Suppresses and disables click, hover and mouseOut event emitters. Setting to true can increase performance for non-interactive charts.                                                                                                                                                                                          |
| `cursor`                | string               | 'default'                                     | Changes pointer type during mouse over on elements. Valid values are 'default' or 'pointer'.                                                                                                                                                                                                                                    |
| `onClickEvent`          | function             | `undefined`                                   | When clickEvent event occurs (e.g., mouse/keyboard click on chart geometry), this event handler will be called with the custom event object (e.g., e), containing data and target node at e.detail `{data: d, target: n}`. You will need to construct your own functionality of what actions to take within the callback.       |
| `clickHighlight`        | object[]             | []                                            | Data used to track chart selections, an array of objects which includes keys that map to above accessors.                                                                                                                                                                                                                       |
| `clickStyle`            | object (custom type) | [IClickStyleType](../types/src/prop-types.ts) | Sets the styling of elements when they are selected, _see object definition below_.                                                                                                                                                                                                                                             |
| `onHoverEvent`          | function             | `undefined`                                   | When hoverEvent event occurs (e.g., mouse hover/keyboard focus on chart geometry), this event handler will be called with the custom event object (e.g., e), containing data and target node at e.detail `{data: d, target: n}`. You will need to construct your own functionality of what actions to take within the callback. |
| `onMouseOutEvent`       | function             | `undefined`                                   | When mouseOutEvent event occurs (e.g., mouse/keyboard blur on chart geometry), this event handler will be called, and has no data object. You will need to construct your own functionality of what actions to take within the callback.                                                                                        |
| `hoverHighlight`        | object               | {}                                            | Datum object used to track active chart element, the object should include keys that map to above accessors.                                                                                                                                                                                                                    |
| `hoverStyle`            | object (custom type) | [IHoverStyleType](../types/src/prop-types.ts) | Sets the styling of elements when they are hovered/focused, _see object definition below_.                                                                                                                                                                                                                                      |
| `interactionKeys`       | string[]             | []                                            | Sets the column names of data to interact with.                                                                                                                                                                                                                                                                                 |
| `hoverOpacity`          | number               | 1                                             | Sets opacity of inactive elements when hovering/focused on a chart geometry.                                                                                                                                                                                                                                                    |
| `onInitialLoadEvent`    | function             | `undefined`                                   | When initalLoad event occurs (e.g., chart is mounted to window), this event handler will be called with the custom event object (e.g., e), containing the corresponding chartID at e.detail. You will need to construct your own functionality of what actions to take within the callback.                                     |
| `onInitialLoadEndEvent` | function             | `undefined`                                   | When initalLoadEnd event occurs (e.g., chart has been mounted to window), this event handler will be called with the custom event object (e.g., e), containing the corresponding chartID at e.detail. You will need to construct your own functionality of what actions to take within the callback.                            |
| `onDrawStartEvent`      | function             | `undefined`                                   | When drawStart event occurs (e.g., chart render function is called), this event handler will be called with the custom event object (e.g., e), containing the corresponding chartID at e.detail. You will need to construct your own functionality of what actions to take within the callback.                                 |
| `onDrawEndEvent`        | function             | `undefined`                                   | When drawEnd event occurs (e.g., chart's stencil lifecycle completes), this event handler will be called with the custom event object (e.g., e), containing the corresponding chartID at e.detail. You will need to construct your own functionality of what actions to take within the callback.                               |
| `onTransitionEndEvent`  | function             | `undefined`                                   | When transitionEnd event occurs (e.g., chart geometry's transition lifecycle completes), this event handler will be called with the custom event object (e.g., e), containing the corresponding chartID at e.detail. You will need to construct your own functionality of what actions to take within the callback.             |

<br>

#### IClickStyleType Definition

| Name          | Type   | Default Value(s) | Description                                                                                  |
| ------------- | ------ | ---------------- | -------------------------------------------------------------------------------------------- |
| `color`       | string | ''               | Sets the color of the clicked element (requires clickHighlight to be valid and sent).        |
| `strokeWidth` | number | 2                | Sets the stroke width of the clicked element (requires clickHighlight to be valid and sent). |

<br>

#### IHoverStyleType Definition

| Name          | Type   | Default Value(s) | Description                                                                                  |
| ------------- | ------ | ---------------- | -------------------------------------------------------------------------------------------- |
| `color`       | string | ''               | Sets the color of the hovered element (requires hoverHighlight to be valid and sent).        |
| `strokeWidth` | number | 2                | Sets the stroke width of the hovered element (requires hoverHighlight to be valid and sent). |

```js
// example of interactivity code
// note this only tracks a single click, you need your own logic to build the array of currnet selections made by user and then pass that result back to chart
//...
const clickHandler = evt => {
  const d = evt.detail.data; // data is located here
  const t = evt.detail.target; // chart mark/label clicked is located here

  this.currentClickedElement = [d]; // this is passed to clickHighlight prop
};

const hoverHandler = evt => {
  const d = evt.detail.data; // data is located here
  const t = evt.detail.target; // chart mark/label clicked is located here

  this.currentHoveredElement = d; // this is passed to hoverHighlight prop
};

const mouseOutHandler = evt => {
  this.currentHoveredElement = ''; // this is passed to hoverHighlight prop
};

// an example of calling these from within a stencil.js component
<heat-map
  data=[{data}]
  xAccessor="month"
  yAccessor="region"
  valueAccessor="value"
  interactionKeys={['region']}
  onClickEvent={this.onClickEvent}
  clickHighlight={this.currentClickedElement}
  clickStyle={this.clickStyle}
  onHoverEvent={this.onHoverEvent}
  onMouseOutEvent={this.onMouseOut}
  hoverHighlight={this.currentHoveredElement}
  hoverStyle={this.hoverStyle}
/>
//...
```

<br>
<br>

### <a name="label-props" href="#label-props">#</a> Label Props [<>](./src/components/heat-map/heat-map.tsx 'Source')

| Name           | Type                 | Default Value(s)                                | Description                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------- | -------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dataLabel`    | object (custom type) | [IDataLabelType](../types/src/prop-types.ts)    | Controls visibility, styling and placement of data labels, _see object definition below_.                                                                                                                                                                                                                                                                                                                          |
| `dataKeyNames` | object               | `undefined`                                     | Object that contains mapping of data keys (e.g., accessors) and user friendly names of the data fields. This prop can be used to enable translation of data keys between languages, or just provide a meaningful name for data elements within a chart. The key:value pairs in this object will effect tooltips, data table, aria labels, axes, etc. Anywhere in chart where data key may be exposed to consumers. |
| `legend`       | object (custom type) | [ILegendType](../types/src/prop-types.ts)       | Controls visibility and label of the chart legend, _see object definition below_.                                                                                                                                                                                                                                                                                                                                  |
| `showTooltip`  | boolean              | true                                            | Toggles whether to display the tooltip on hover/focus on chart geometries.                                                                                                                                                                                                                                                                                                                                         |
| `tooltipLabel` | object (custom type) | [ITooltipLabelType](../types/src/prop-types.ts) | Controls visibility, content and format of the chart tooltip, _see object definition below_.                                                                                                                                                                                                                                                                                                                       |

<br>

#### IDataLabelType Definition

| Name            | Type    | Default Value(s) | Description                                                                                                                                              |
| --------------- | ------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `labelAccessor` | string  | ''               | Key used to determine label's property.                                                                                                                  |
| `visible`       | boolean | true             | Toggles the visibility (opacity) of the data labels.                                                                                                     |
| `placement`     | string  | 'top'            | Sets the placement of the data label.                                                                                                                    |
| `format`        | string  | '0[.][0][0]a'    | Sets the formatting for the data labels, EG %b, refer to [d3-time-format](https://github.com/d3/d3-time-format) and [numeral.js](http://numeraljs.com/). |

<br>

#### ILegendType Definition

| Name          | Type     | Default Value(s) | Description                                                                                                                                                |
| ------------- | -------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `visible`     | boolean  | true             | Toggles the visibility (opacity/display) of the legend.                                                                                                    |
| `interactive` | boolean  | false            | Toggles the interactivity of the legend.                                                                                                                   |
| `format`      | string   | ''               | Sets the formatting for the legend labels, EG %b, refer to [d3-time-format](https://github.com/d3/d3-time-format) and [numeral.js](http://numeraljs.com/). |
| `labels`      | string[] | ''               | An array that sets each label in the legend, in order. Passing empty string will populate legend labels directly from data values.                         |
| `type`        | string   | ''               | Sets the type of the legend, example types are 'default', 'gradient' and 'key'.                                                                            |

<br>

#### ITooltipLabelType Definition

| Name            | Type     | Default Value(s) | Description                                                                                                                                                                 |
| --------------- | -------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `labelAccessor` | string[] | []               | An array that determines which property of the data is displayed in the tooltip.                                                                                            |
| `labelTitle`    | string[] | []               | An array that sets the title for each data property in the tooltip.                                                                                                         |
| `format`        | string   | ''               | Sets the formatting for the data properties in the tooltip, EG %b, refer to [d3-time-format](https://github.com/d3/d3-time-format) and [numeral.js](http://numeraljs.com/). |

<br>
<br>

### <a name="margin-and-padding-props" href="#margin-and-padding-props">#</a> Margin & Padding Props [<>](./src/components/heat-map/heat-map.tsx 'Source')

| Name      | Type                 | Default Value(s)                            | Description                                                                                                                                     |
| --------- | -------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `margin`  | object (custom type) | [IBoxModelType](../types/src/prop-types.ts) | Margin between the subtitle and the chart area, or between the title and chart area if no subtitle is specified, _see object definition below_. |
| `padding` | object (custom type) | [IBoxModelType](../types/src/prop-types.ts) | Padding between plot area and axes lines, _see object definition below_.                                                                        |

<br>

#### IBoxModelType Definition

| Name     | Type   | Default Value(s) | Description                                             |
| -------- | ------ | ---------------- | ------------------------------------------------------- |
| `top`    | number | height \* 0.01   | Sets the top margin/padding for the chart container.    |
| `bottom` | number | height \* 0.01   | Sets the bottom margin/padding for the chart container. |
| `left`   | number | width \* 0.01    | Sets the top margin/padding for the chart container.    |
| `right`  | number | width \* 0.01    | Sets the top margin/padding for the chart container.    |

<br>
<br>

### <a name="style-props" href="#style-props">#</a> Style Props [<>](./src/components/heat-map/heat-map.tsx 'Source')

| Name            | Type     | Default Value(s) | Description                                                                                                                                    |
| --------------- | -------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `colorPalette`  | string   | 'single_blue'    | Included color palettes can be found in our [color utility](../utils#colors). Overridden by colors.                                            |
| `colorSteps`    | number   | 5                | Sets numbers of heatmap color steps.                                                                                                           |
| `colors`        | string[] | `undefined`      | Accepts array of color strings or color values to customize colors beyond our palettes. Overridden by groupAccessor, colors assigned in order. |
| `roundedCorner` | number   | 0                | Sets the border radius of the chart geometries.                                                                                                |
| `shape`         | string   | 'rect'           | Changes grid shape. (`rect` and `circle` are the only valid inputs)                                                                            |
| `strokeWidth`   | string   | '2'              | Changes stroke width of grids.                                                                                                                 |

<br>
<br>
