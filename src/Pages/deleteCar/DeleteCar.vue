<template>
    <section class="removeCar">
        <Toast />
        <form @submit="deleteCar">
            <div class="col-12 md:col-4 input">
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">
                        <i class="pi pi-times-circle"></i>
                    </span>
                    <InputText placeholder="Senha" v-model="password" />
                </div>
            </div>

            <div class="button">
                <Button
                    label="Retirar veículo"
                    type="submit"
                    class="p-button-danger"
                />
            </div>
        </form>
    </section>
</template>

<script>
export default {
    name: 'DeleteCar',
    data() {
        return {
            password: '',
        };
    },
    methods: {
        async deleteCar(e) {
            e.preventDefault();

            let req = await fetch(
                `http://localhost:3500/api/user?password=${this.password}`,
                {
                    method: 'DELETE',
                }
            );

            let data = await req.json();

            if (data.Message) {
                this.$toast.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: `${data.Message}`,
                    life: 3000,
                });
            } else {
                this.$toast.add({
                    severity: 'success',
                    summary: 'Success Message',
                    detail: `${data.user}`,
                    life: 6000,
                });
            }
        },
    },
};
</script>

<style scoped>
.removeCar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 550px;
}

.removeCar form {
    padding: 20px 30px 20px 30px;
    box-shadow: 0px 0px 5px #000000;
}

.removeCar form .button {
    text-align: center;
    margin: 15px 0px 0px 0px;
}
</style>
