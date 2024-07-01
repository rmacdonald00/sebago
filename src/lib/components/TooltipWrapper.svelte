<script lang="ts">
    export let tooltipText: string;
</script>

<div class={'tooltip'}>
    <span class="tooltiptext">{tooltipText}</span>
    <slot/>
</div>

    <style>
        /* Taken from: https://www.w3schools.com/css/css_tooltip.asp */
.tooltip {
    display: inline;
}
/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 5rem;
  background-color: rgba(0, 0, 0, 0.50);
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}
    </style>