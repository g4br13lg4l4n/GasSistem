<template>
    <form>
        <slot name="SlotFormGroup">
            <label for="name">Nombre</label>
            <input type="text" id="name" class="color-white">
        </slot>
    </form>
</template>
<style lang="stylus" scoped>
    label 
        display block
</style>


