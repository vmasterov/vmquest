import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";

@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const covers = [
            {
                id: 0,
                start: {
                    header: 'Username!',
                    lead: 'у Вас 1 новое сообщение',
                    image: true,
                    button: {
                        url: 'index.html',
                        text: 'Читать'
                    }
                }
            },
            {
                id: 1,
                finish: {
                    header: 'Поздравляю!',
                    lead: 'Вы успешно справились с заданием! Картина возвращена законному владельцу.',
                    image: false,
                    button: {
                        url: 'index.html',
                        text: 'Пройти заново'
                    }
                }
            }
        ];
        /**
         * Test dbObject
         * It will be deleted soon
         */
        const test = [
            {
                id: 0,
                message: 'Test message'
            }
        ];
        return {
            covers,
            test
        };
    }
}