<template>
  <b-navbar spaced>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        MEMORABRIDE
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        HOME
      </b-navbar-item>
      <b-navbar-item tag="div">
        CATALOG
      </b-navbar-item>
      <b-navbar-item tag="div">
        <b-icon pack="fas" icon="search" size="is-small"> </b-icon>
      </b-navbar-item>
      <b-navbar-item tag="div">
        <b-icon pack="fas" icon="shopping-cart" size="is-small"> </b-icon>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
