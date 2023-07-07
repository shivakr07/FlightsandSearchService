class CrudRepository{
    constructor(model){
        this.model = model;
    }
    
    async create(data){
        try{
            const result = await this.model.create(data);
            return result;
        }catch(error){
            console.log('something went wrong in the crud repo');
            throw error;
        }
    }

    async destroy(modelId){
        try{
            await this.model.destroy({
                where:{
                    id: modelId
                }
            }) 
        }catch(error){
            console.log('something went wrong in the crud repo');
            throw error;
        }
    }

    async get(modelId){
        try{
            const result = await this.model.findByPk(modelId);
            return result;
        }catch(error){
            console.log('something went wrong in the crud repo');
            throw error;
        }
    }

    async getAll(){
        try{
            const result = await this.model.findAll();
            return result;
        }catch(error){
            console.log('something went wrong in the crud repo');
            throw error;
        }
    }

    async update(modelId, data){
        try{
            const result = this.model.update(data,{
                where : {
                    id : modelId
                }
            });
        }catch(error){
            console.log('something went wrong in the crud repo');
            throw error;
        }
    }
}

module.exports = CrudRepository;