<template>
    <Toast />
    <form @submit="registerCar">
        <div class="title">
            <h1>Estaciona <span>.com</span></h1>
        </div>

        <div class="col-12 md:col-4 input">
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-user"></i>
                </span>
                <InputText placeholder="Nome" v-model="name" />
            </div>
        </div>

        <div class="col-12 md:col-4 input">
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-phone"></i>
                </span>
                <InputMask
                    v-model="phone"
                    placeholder="Telefone"
                    mask="(99)99999-9999"
                />
            </div>
        </div>

        <div class="col-12 md:col-4 input">
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-id-card"></i>
                </span>
                <InputMask
                    v-model="cpf"
                    placeholder="Cpf"
                    mask="999.999.999-99"
                />
            </div>
        </div>

        <div class="col-12 md:col-4 input">
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-car"></i>
                </span>
                <InputMask
                    v-model="plate"
                    placeholder="Placa"
                    mask="aaaa-9999"
                />
            </div>
        </div>

        <div class="col-12 md:col-4 input">
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-circle-fill"></i>
                </span>
                <InputText v-model="color" placeholder="Cor" />
            </div>
        </div>

        <div class="button">
            <Button label="Cadastrar" type="submit" class="p-button-success" />
        </div>
    </form>
</template>

<script>
export default {
    name: 'Form',
    data() {
        return {
            name: '',
            color: '',
            phone: '',
            cpf: '',
            plate: '',
        };
    },
    methods: {
        async registerCar(e) {
            e.preventDefault();

            let userCar = {
                name: this.name,
                phone: this.phone,
                cpf: this.cpf,
                plate: this.plate,
                color: this.color,
            };

            let req = await fetch(`http://localhost:3500/api/user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json',
                },
                body: JSON.stringify(userCar),
            });

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
                    detail: `Carro cadastrado com sucesso. Senha para retirar o veículo: ${data.password}`,
                    life: 6000,
                });
                this.clearFields();
            }
        },

        clearFields() {
            this.name = '';
            this.plate = '';
            this.cpf = '';
            this.color = '';
            this.phone = '';
        },
    },
};
</script>

<style scoped>
form {
    box-shadow: 0px 0px 6px #000000;
    background-color: #ffffff;
    border: none;
    border-radius: 6px;
    padding: 35px 40px 20px 40px;
}

form .input {
    margin: 15px 0px 0px 0px;
}

form .button {
    text-align: center;
    margin: 15px 0px 0px 0px;
}

form .title {
    text-align: center;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
}

form .title span {
    color: #04fd42;
}
</style>
