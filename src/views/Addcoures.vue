<template>
<v-content>
    
<div class="course"  >
    <h1 class="display-3 ma-15" >ADD COURSE</h1> 
 <v-row>    
<h2 class="display-1 ma-15">Course ID :</h2>

     <v-col class="d-flex ma-10" cols="12" sm="2">
          <v-text-field
            
            single-line
          ></v-text-field>
        </v-col>
<h2 class="display-1 ma-15">Course name :</h2>
 <v-col class="d-flex ma-10" cols="12" sm="2">
          <v-text-field
            
            single-line
          ></v-text-field>
        </v-col>
</v-row>


<v-row>
<h2 class="display-1 ma-15">Teaching period :</h2>
<v-col class="d-flex ma-10" cols="12" sm="2">
        <v-select
          :items="items"
          label="Day/Month/Year"
        ></v-select>
      </v-col>
      
<h2 class="display-1 ma-15">Teacher name :</h2>
 <v-col class="d-flex ma-10" cols="12" sm="2">
          <v-text-field
            single-line
          ></v-text-field>
        </v-col>
</v-row>
<v-row>
<h2 class="display-1 ma-15">Course status :</h2>
<v-col class="d-flex ma-10" cols="12" sm="2">
        <v-select
          :items="items"
          label="Choose status"
        ></v-select>
      </v-col>
</v-row>

<div class="my-2 ma-15 " align="center" >
    
        <v-btn depressed large color="red"  >comfirm</v-btn>
    
 </div>
  
 
</div>
</v-content>


</template>

<script>
export default{
  
 

}

</script>
