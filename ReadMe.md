---
# Pullse AI - Chat Widget
Pullse AI is a centralized customer support platform that uses AI to deliver seamless experiences, automate routine tasks and enhance agent performance.

# Documentation

## Introduction

`PullseChatWidget` is a straightforward and easy-to-integrate chat widget for React applications. It facilitates seamless communication between users with minimal configuration.

## Installation

To install the `PullseChatWidget` package, use the following npm command:

```bash
npm install @pullse-ai/chat-widget
```

or with yarn:

```bash
yarn add @pullse-ai/chat-widget
```

## Integration

### 1. Import the PullseChatWidget component

Import the `PullseChatWidget` component in the file where you want to use the chat widget.

```jsx
import PullseChatWidget from '@pullse-ai/chat-widget';
```

### 2. Add the PullseChatWidget component to your React application

Place the `PullseChatWidget` component within your React application, typically in a layout file or a component that is rendered across multiple pages.

```jsx
import React from 'react';
import PullseChatWidget from '@pullse-ai/chat-widget';

function App() {
  const pullseChatData = {
    "token": "ankit.kumar@pullse.ai",
    "userType": "customer"
  };

  return (
    <div>
      {/* Your existing components */}
      <header>
        <h1>Your React App</h1>
      </header>

      {/* Pullse Chat Widget */}
      <PullseChatWidget data={pullseChatData} />
    </div>
  );
}

export default App;
```

## Data Prop

The `PullseChatWidget` component requires a `data` prop, which should be an object with the following format:

```json
{
  "token": "ankit.kumar@pullse.ai",
  "userType": "customer"
}
```

Ensure that you provide the correct `token` and `userType` for authentication and user identification.

## Conclusion

Congratulations! You've successfully integrated the `PullseChatWidget` package into your React application. If you have any questions or need further assistance, refer to the [official documentation](https://www.npmjs.com/package/@pullse-ai/chat-widget).

---

This simplified documentation assumes that the primary configuration is done through the `data` prop, and users need to provide the necessary authentication details. Make sure to replace the placeholder text with actual details about your package's features and any additional information users might need.