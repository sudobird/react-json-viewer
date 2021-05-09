# React JSON Viewer

A compact light weight collapsible React component to visualize JSON objects and Arrays with chrome console like UI in tree format!

### Installation:
```
npm install @sudobird/react-json-viewer
```

### Usage:
```
import JsonViewer from '@sudobird/react-json-viewer';

<JsonViewer data={jsonObj} />
```

### Example:

```
const jsonData = {
    name: "sudobird",
    age: 99,
    cities: ['abc', 'def', 'ghi'],
    gender: 'M',
    car: null,
    pan: 'BBGHGJ8485',
    isActive: false,
    jobs: [
        {title: 'Software Engineer', city: 'abc'},
        {title: 'Consultant', city: 'def'},
    ]
}
```

<img src="https://github.com/sudobird/react-json-viewer/blob/master/src/lib/docs/viewer.png?raw=true" height="400px"/> <img src="https://github.com/sudobird/react-json-viewer/blob/master/src/lib/docs/viewer.gif?raw=true" height="400px"/>

 
