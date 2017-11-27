/**
 * Module dependencies.
 */
import { Likemark } from '../models/entity'
import { options } from '../config/database'
import { Request, Response } from 'express'
import { getRepository, Connection, createConnection } from 'typeorm'

export class EntityDAO {
  private likemarkModel

  constructor () {}

  public get (req: Request, res: Response) {
    const uuId: number = req.params.uuId
    createConnection(options).then(connection => {
      connection.getRepository(Likemark).findOne({
        uuId: uuId
      })
      .then(
        (entity) => {
          return res.status(200).json({
            success: true,
            message: entity
          })
        },
        (_err) => {
          return res.status(400).json({
            success: false,
            message: _err.message
          })
        })
    }, error => console.log('Cannot connect: ', error))
  }

//   public getFirstChild (req: Request, res: Response) {
//     const uuId: number = req.params.uuId
//     Entity.findAll<Entity>({
//       where: {
//         parentId: uuId
//       }
//     })
//     .then(
//       (childrens) => {
//         return res.status(200).json({
//           success: true,
//           message: childrens
//         })
//       },
//       (_err) => {
//         return res.status(400).json({
//           success: false,
//           message: _err.message
//         })
//       })
//   }

//   public list (req: Request, res: Response) {
//     Entity.findAll<Entity>()
//     .then(
//       (entities) => {
//         return res.status(200).json({
//           success: true,
//           message: entities
//         })
//       },
//       (_err) => {
//         return res.status(400).json({
//           success: false,
//           message: _err.message
//         })
//       })
//   }

//   public post (req: Request, res: Response) {
//     const entity: any = req.body
//     Entity.create<Entity>(entity)
//     .then(
//       (entity) => {
//         return res.status(201).json({
//           success: true,
//           message: entity
//         })
//       },
//       (_err) => {
//         return res.status(400).json({
//           success: false,
//           message: _err.message
//         })
//       })
//   }

//   public update (req: Request, res: Response) {
//     const uuId: number = req.params.uuId
//     const entity: Object = req.body

//     Entity.update<Entity>( entity, {
//       where: {
//         uuId: uuId
//       }
//     })
//     .then(
//       (entity) => {
//         if (entity[0] === 1 ) {
//           return res.status(200).json({
//             success: true,
//             message: entity
//           })
//         }else {
//           return res.status(400).json({
//             success: false,
//             message: 'There is no entity associated to this uuId.'
//           })
//         }
//       },
//       (_err) => {
//         return res.status(400).json({
//           success: false,
//           message: _err.message
//         })
//       })
//   }

//   public remove (req, res: any) {
//     const uuId: number = req.params.uuId
//     Entity.destroy({
//       where: {
//         uuId: uuId
//       }
//     })
//     .then(
//       (entity) => {
//         if (entity === 1 ) {
//           return res.status(200).json({
//             success: true,
//             message: entity
//           })
//         }else {
//           return res.status(400).json({
//             success: false,
//             message: 'There is no entity associated to this uuId.'
//           })
//         }
//       },
//       (_err) => {
//         return res.status(400).json({
//           success: false,
//           message: _err.message
//         })
//       })
//   }
}
