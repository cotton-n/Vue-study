<template>
  <div>
    <canvas ref="chart"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
    const data = {
      labels,
      datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    };

    new this.$_Chart(this.$refs.chart, {
      type: 'line',
      data: data,
    });
  },
};
</script>

<style scoped></style>
