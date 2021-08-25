<template>
  <div class="property">
    <div :class="property.topDashClasses || ['dash', 'w-100', 'my-4']" v-if="property.topDash"></div>
    <p class="mb-2">
      <span :class="[title.classes]" v-for="(title, tI) in property.titles" :key="tI">{{title.text}}</span>
    </p>
    <p class="doc-description-text mb-2">
      <span :class="[desc.classes]" v-for="(desc, dI) in property.desc" :key="dI">{{desc.text}}</span>
    </p>
    <p class="mb-0" v-if="property.examples">
      <span :class="[example.classes]" v-for="(example, eI) in property.examples" :key="eI">{{example.text}}</span>
    </p>
    <b-btn v-if="property.sub" class="show-hide-property-btn" @click="showChildProperties = !showChildProperties">
      <span class="mr-2">{{showChildProperties ? 'Hide' : 'Show'}} object properties</span>
      <b-icon class="mb-2-px" :icon="showChildProperties ? 'caret-up-fill':'caret-down-fill'" scale="0.6"></b-icon>
    </b-btn>
    <div v-if="property.sub && showChildProperties" class="property-expansion-panel mt-3">
      <property v-for="(subProperty, pI) in property.sub || []" :key="pI" :property="subProperty" />
    </div>
    <div :class="property.bottomDashClasses || ['dash', 'w-100', 'my-4']" v-if="property.bottomDash"></div>
  </div>
</template>

<script>
export default {
  name: 'property',
  props: {
    property: Object,
  },
  data(){
    return {
      showChildProperties: false
    }
  },
}
</script>

<style>

</style>