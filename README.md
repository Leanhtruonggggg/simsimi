# Simsimi

![GitHub repo size](https://img.shields.io/github/repo-size/Leanhtruonggggg/simsimi?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/Leanhtruonggggg/simsimi?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/Leanhtruonggggg/simsimi?style=for-the-badge)


## Free Simsimi Talk API Reverse Engineered from the App

## Prerequisites

Before starting, make sure you've met the following requirements:
* `Node.js v16.x`

## Install

Install latest version from NPM:

```
npm i simsimi
```

## Test package
```
npm test
```
## Usage

```
const sim = require('simsimi');
const response = await sim.simtalktalk('Hi', 'en');
console.log(response);
```

Expects something like
```
{
    "status": "success",
    "id": 0,
    "text": "hi",
    "message": "đéo ai yêu mày đâu liuliu",
    "language": "vn",
    "donate": {
        "paypal": "cloneek5@gmail.com"
    },
    "contact": "https://t.me/simsimiapi",
    "ip": "2402:800:6215:ec7d:7963:c487:82dd:ae50"
}
```
Where origin_sentenced is uncensored response.

If it doesn't know how to answer, or text has emojis
```
{
  detail: 'I do not know how to answer. Teach me the answer.'
  }
```
```
{
  detail: 'Emoticons can not be understood.'
  }
```
## Arguments

```
await freesimi.talk(text, language, level, uid);
```

text: Actual text to ask, must be string.
<br>
language: Language you want to talk, see [Here](langCodes.md) for more.
<br>

[⬆ Back to the top](#simsimi)<br>
