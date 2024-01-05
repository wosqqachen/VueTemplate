<template>
  <div v-if="pages.length" class="container">
    <table>
      <tr>
        <th>序号</th>
        <th>组件名称</th>
        <th>组件描述</th>
      </tr>
      <template v-for="(page, index) in pages" :key="page.path">
        <tr>
          <td>
            <span @click="handleCopy(page.path)" title="复制">{{
              index + 1
            }}</span>
          </td>
          <td>
            <a
              :href="`./pageList.html?p=${page.path}&n=${page.num}`"
              title="打开"
              >{{ page.path }}</a
            >
          </td>
          <td>
            <span @click="handleCopy(page.path, page.title)" title="复制">{{
              page.title
            }}</span>
          </td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script setup lang="ts">
import json from "./pages.json";
const pages = json;

const handleCopy = (name: string, title?: string) => {
  const pathname = location.pathname.substring(
    0,
    location.pathname.lastIndexOf("/")
  );
  const url = `${location.origin}${pathname}/pageList.html?p=${name}`;
  if (title) {
    copyToClipboard(`${title}${url}`);
  } else {
    copyToClipboard(url);
  }
};

const copyToClipboard = (text: string) => {
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  textarea.style.position = "fixed";
  textarea.style.top = "10px";
  textarea.value = text;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  showToast(text);
};

const showToast = (message: string) => {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 30px;
    left: 50%;
    z-index: 9999;
    padding: 8px 10px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transform: translateX(-50%);
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    document.body.removeChild(toast);
  }, 1000);
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  margin: 0 auto;
  padding: 16px;
  background-color: #f5f6f6;
}

table,
tr,
th,
td {
  border: 1px solid #ddd;
}

table {
  width: 100%;
  background-color: #fff;

  tr {
    transition: background 0.25s;

    &:hover {
      background: #f5f6f6;
    }
  }

  td,
  th {
    padding: 8px;

    &:nth-child(1) {
      text-align: center;
    }
  }

  td {
    cursor: pointer;
    user-select: text;

    &:nth-child(1),
    &:nth-child(2) {
      span {
        &:hover {
          color: rgba(0, 0, 255);
        }
      }
    }
  }
}

a {
  display: block;
  color: rgb(0, 0, 150);

  &:hover {
    color: rgba(0, 0, 255);
  }
}
</style>
