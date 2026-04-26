<script setup>
import { onMounted, watch } from "vue";

const props = defineProps({
  title: { type: String, default: "Mak Phed" },
  description: {
    type: String,
    default:
      "Authentisches thailändisches und laotisches Restaurant in Berlin – Jonasstraße 35, 12053 Berlin.",
  },
  canonical: { type: String, default: "" },
});

const setMeta = () => {
  // Title
  document.title = props.title;

  // Description
  setTag("meta", "name", "description", "content", props.description);

  // OG Tags
  setTag("meta", "property", "og:title", "content", props.title);
  setTag("meta", "property", "og:description", "content", props.description);
  setTag("meta", "property", "og:type", "content", "website");
  setTag(
    "meta",
    "property",
    "og:image",
    "content",
    "https://makphed.de/img/Logo.png",
  );
  setTag("meta", "property", "og:site_name", "content", "Mak Phed");
  setTag("meta", "property", "og:locale", "content", "de_DE");

  // Twitter
  setTag("meta", "name", "twitter:card", "content", "summary_large_image");
  setTag("meta", "name", "twitter:title", "content", props.title);
  setTag("meta", "name", "twitter:description", "content", props.description);
  setTag(
    "meta",
    "name",
    "twitter:image",
    "content",
    "https://makphed.de/img/Logo.png",
  );

  // Canonical
  if (props.canonical) {
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", props.canonical);
  }
};

const setTag = (tag, attrKey, attrValue, contentKey, contentValue) => {
  let el = document.querySelector(`${tag}[${attrKey}="${attrValue}"]`);
  if (!el) {
    el = document.createElement(tag);
    el.setAttribute(attrKey, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute(contentKey, contentValue);
};

onMounted(setMeta);
watch(() => props.title, setMeta);
watch(() => props.description, setMeta);
</script>

<template></template>
