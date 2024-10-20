<img src="https://user-images.githubusercontent.com/19279756/106659815-3d84ad00-65c5-11eb-97de-369b2d77de45.png" width="500">

# React Native Remix Icon
React native implementation for the popular [RemixIcon](https://remixicon.com) open source library. This is a fork of [react-native-remix-icon](https://github.com/ajayesivan/react-native-remix-icon) which is no longer maintained. I've added support for some missing icons.

### Install
Using yarn
```bash
yarn add remix-icons-react-native
```

Using npm

```bash
npm install remix-icons-react-native
```

This library relies on the `react-native-svg` package to render svg icons. Install the `react-native-svg` package,

```bash
yarn add react-native-svg
```
or
```bash
npm install react-native-svg
```


### Usage
```javascript
import Icon from 'react-native-remix-icon';
```

```javascript
<Icon name="home-fill" size="48" color="red">
```

### Props
|Prop|Default|Description|
|----|-----|-----|
|name|`remixicon-fill`| Name of the icon. Explore the [remixicon](https://remixicon.com) library for all valid icon names|
|size|`24`|Size of the icon|
|color| `black`| Color of the icon|
