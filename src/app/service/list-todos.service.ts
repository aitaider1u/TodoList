import {Injectable, OnInit} from '@angular/core';
import {Todo} from "../model/todo.model";
import {v4 as uuidv4} from "uuid";
import {Observable, of} from "rxjs";
import {TodoListService} from "./todo-list.service";

@Injectable({
  providedIn: 'root'
})

export class ListTodosService{

  _toDos! :Todo[];

  constructor() {
    this._toDos = [
      {
        id: uuidv4(),
        name : "Liste de courses",
        description : "Ma liste de course pour ce samedi",
        tasks : [
          {
            id: uuidv4(),
            description : "1 kg d'avocat",
            state :  false
          },
          {
            id: uuidv4(),
            description : "2 kg de farines",
            state :  false
          }
        ]
      },
      {
        id: uuidv4(),
        name: "Tâches du jour",
        description: "Liste de tâches à accomplir aujourd'hui",
        tasks: [
          {
            id: uuidv4(),
            description: "Répondre aux e-mails",
            state: false
          },
          {
            id: uuidv4(),
            description: "Préparer le rapport",
            state: false
          },
          {
            id: uuidv4(),
            description: "Assister à la réunion",
            state: false
          },
          {
            id: uuidv4(),
            description: "Finaliser la présentation",
            state: false
          }
        ]
      },
      {
        id: uuidv4(),
        name: "Projet de rénovation",
        description: "Liste des tâches pour la rénovation de la maison",
        tasks: [
          {
            id: uuidv4(),
            description: "Acheter de la peinture",
            state: false
          },
          {
            id: uuidv4(),
            description: "Réparer le toit",
            state: false
          },
          {
            id: uuidv4(),
            description: "Installer de nouvelles portes",
            state: false
          },
          {
            id: uuidv4(),
            description: "Aménager le jardin",
            state: false
          }
        ]
      },
      {
        id: uuidv4(),
        name: "Liste de voyage",
        description: "Préparatifs pour mes vacances",
        tasks: [
          {
            id: uuidv4(),
            description: "Réserver un vol",
            state: false
          },
          {
            id: uuidv4(),
            description: "Faire une liste de vêtements à emporter",
            state: false
          },
          {
            id: uuidv4(),
            description: "Faire une réservation d'hôtel",
            state: false
          },
          {
            id: uuidv4(),
            description: "Vérifier les documents de voyage",
            state: false
          },
          {
            id: uuidv4(),
            description: "Faire une liste des attractions à visiter",
            state: false
          }
        ]
      },{
        id: uuidv4(),
        name: "Projet scolaire",
        description: "Tâches à accomplir pour mon projet de science",
        tasks: [
          {
            id: uuidv4(),
            description: "Faire des recherches sur le sujet",
            state: false
          },
          {
            id: uuidv4(),
            description: "Rédiger le plan du projet",
            state: false
          },
          {
            id: uuidv4(),
            description: "Collecter des données",
            state: false
          },
          {
            id: uuidv4(),
            description: "Effectuer des expériences",
            state: false
          },
          {
            id: uuidv4(),
            description: "Préparer la présentation",
            state: false
          }
        ]
      },
      {
        id: uuidv4(),
        name: "Journée de détente",
        description: "Activités relaxantes pour ma journée de congé",
        tasks: [
          {
            id: uuidv4(),
            description: "Lire un livre",
            state: false
          },
          {
            id: uuidv4(),
            description: "Regarder un film",
            state: false
          },
          {
            id: uuidv4(),
            description: "Faire du yoga",
            state: false
          },
          {
            id: uuidv4(),
            description: "Prendre un bain relaxant",
            state: false
          },
          {
            id: uuidv4(),
            description: "Faire une sieste",
            state: false
          }
        ]
      }
    ];
  }

  getAllTodos(): Observable<Todo[]>{
    return of(this._toDos);
  }

}
