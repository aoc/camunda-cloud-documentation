---
id: camunda-forms
title: Camunda Forms
---

## What are Camunda Forms?

Camunda Forms is one of the handling a User Task on Tasklist. These Forms can be created on the Camunda Modeler where they can also be embedded to the BPMN file with your Diagram and assign a Form to a User Task.

After deploying a Diagram with an embedded Form, Tasklist will import this Form schema to the API where every Task that is assigned to this Form will be related to the Form schema on the API.

All new tasks that have a form assigned to it on the BPMN diagram will render the form modeled on the Camunda Modeler. The fields will be pre-filled with variables with the same names as the respective fields. When the task is complete, variables will be updated or created based on the field names of the form.

## How to use Camunda Forms?

### Modeling the diagram and form

Open the Camunda Modeler and create a new diagram for the Zeebe Engine.
![Camunda Modeler initial screen with BPMN Diagram (Zeebe engine) highlighted](./img/camunda-forms-1-new-zeebe-diagram.png)

Model a process with a User Task
![BPMN Diagram modeled with a User Task](./img/camunda-forms-2-bpmn-creation.png)

Now create a form by clicking on Form (Camunda Forms)
![Camunda Modeler initial screen with Forms (Camunda Forms) highlighted](./img/camunda-forms-3-formjs-creation.png)

Model your form and click on the bottom left corner that says JSON to switch to the JSON view.

Pay attention when naming the fields of your form, fields will have their values prefilled from variables that have the same name.

![Form modeled with arrow pointing to button on bottom left corner with text JSON](./img/camunda-forms-4-form-modeler.png)

Copy the JSON schema
![JSON view of the form modeled](./img/camunda-forms-5-form-json.png)

Go back to the BPMN Diagram you modeled earlier, select the User Task, and click on the Forms tab. After switching tabs you should see the field where you can paste the form JSON schema. Paste the schema and save the file.
![BPMN Diagram with User Task selected, Forms tab clicked, and Form JSON configuration field filled](./img/camunda-forms-6-set-form-json-user-task.png)

### Deploying the Diagram

Deploy your diagram to Zeebe and create an instance.

```sh
zbctl deploy /path/to/my/diagram.bpmn
zbctl create instance diagram-id
```

### Completing the Task

Now open Tasklist, you should see an unclaimed Task, click on it and the details will open with the form you modeled earlier.
![Tasklist initial page with new unclaimed Task created](./img/camunda-forms-7-task-unclaimed.png)

Claim this Task, fill the form, and complete the Task.
![Selected Task claimed with form filled](./img/camunda-forms-8-task-claimed-filled.png)

If you filter by Completed Tasks you should see your Task listed there.
![Tasks filtered by Completed Tasks with previous Task completed](./img/camunda-forms-9-task-completed-details-tasklist.png)

### Checking Instance on Operate

If you go to Operate you should see your Instance complete (if your Diagram consisted of only 1 User Task).
![Operate Instances page with completed filter checked and one Instance visible](./img/camunda-forms-10-process-instances-page.png)

Go to the Instance details page, you can see that values you filled on the form are now Process Variables.
![Details page of the completed Instance](./img/camunda-forms-11-process-completed-single-instance.png)
